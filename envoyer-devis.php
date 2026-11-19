<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store, private');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $data): void
{
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function fail(int $status, string $code): void
{
    respond($status, ['ok' => false, 'code' => $code]);
}

function field(string $name, int $max, bool $multiline = false): string
{
    $value = $_POST[$name] ?? '';
    $controls = $multiline ? '/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/' : '/[\x00-\x1F\x7F]/';
    if (!is_string($value) || strlen($value) > $max * 4 || preg_match('//u', $value) !== 1
        || preg_match($controls, $value) || preg_match_all('/./us', $value) > $max) {
        fail(422, 'invalid');
    }
    return trim($value);
}

function reserveMail(): int
{
    // Keep only short-lived rate counters outside the published directory, never form data.
    $directory = sys_get_temp_dir() . '/dar-aicha-devis-' . substr(hash('sha256', __DIR__), 0, 24);
    if (!is_dir($directory) && !@mkdir($directory, 0700) && !is_dir($directory)) {
        return 503;
    }
    if (is_link($directory) || (@fileperms($directory) & 0777) !== 0700) {
        return 503;
    }
    $handle = @fopen($directory . '/limits.json', 'c+');
    if (!$handle) {
        return 503;
    }
    try {
        if (!flock($handle, LOCK_EX)) {
            return 503;
        }
        $raw = stream_get_contents($handle, 16384);
        $state = $raw === '' ? ['key' => bin2hex(random_bytes(32)), 'events' => []] : json_decode((string) $raw, true);
        if (!is_array($state) || !is_string($state['key'] ?? null) || !is_array($state['events'] ?? null)) {
            return 503;
        }
        $now = time();
        $ip = hash_hmac('sha256', (string) ($_SERVER['REMOTE_ADDR'] ?? ''), $state['key']);
        $events = array_values(array_filter($state['events'], static function (array $event) use ($now): bool {
            return $event[0] > $now - 3600;
        }));
        $own = count(array_filter($events, static function (array $event) use ($ip): bool {
            return $event[1] === $ip;
        }));
        if ($own >= 5 || count($events) >= 40) {
            return 429;
        }
        $events[] = [$now, $ip];
        $next = json_encode(['key' => $state['key'], 'events' => $events]);
        if (!is_string($next) || !rewind($handle) || fwrite($handle, $next) !== strlen($next)
            || !ftruncate($handle, strlen($next)) || !fflush($handle)) {
            return 503;
        }
        return 200;
    } finally {
        fclose($handle);
    }
}

$method = $_SERVER['REQUEST_METHOD'] ?? '';
if ($method !== 'GET' && $method !== 'POST') {
    header('Allow: GET, POST');
    fail(405, 'invalid');
}
if ($method === 'POST' && (int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 65000) {
    fail(413, 'invalid');
}

session_name('DarAichaDevis');
session_cache_limiter('');
session_set_cookie_params(['lifetime' => 0, 'path' => '/envoyer-devis.php', 'secure' => true, 'httponly' => true, 'samesite' => 'Strict']);
if ($method === 'POST' && !isset($_COOKIE[session_name()])) {
    fail(419, 'challenge');
}
if (!@session_start(['use_strict_mode' => 1, 'use_only_cookies' => 1])) {
    fail(503, 'unavailable');
}

try {
    $check = $_SESSION['devis_challenge'] ?? null;
    if ($method === 'GET') {
        if (!$check || $check['expires'] < time()) {
            $first = random_int(1, 9);
            $second = random_int(1, 9);
            $check = [
                'token' => bin2hex(random_bytes(32)),
                'question' => "$first + $second = ?",
                'answer' => $first + $second,
                'expires' => time() + 900,
            ];
            $_SESSION['devis_challenge'] = $check;
        }
        session_write_close();
        respond(200, ['token' => $check['token'], 'question' => $check['question']]);
    }

    $token = field('token', 64);
    $answer = field('answer', 2);
    if (!$check || $check['expires'] < time() || !hash_equals($check['token'], $token)
        || !ctype_digit($answer) || (int) $answer !== $check['answer']) {
        unset($_SESSION['devis_challenge']);
        session_write_close();
        fail(419, 'challenge');
    }

    $name = field('nom', 120);
    $email = field('email', 254);
    $phone = field('telephone', 40);
    $dates = field('dates', 120);
    $guests = field('personnes', 2);
    $type = field('type', 40);
    $message = field('message', 5000, true);
    $types = ['Villa', "Maison d'hôtes", 'Groupe ou retraite', 'Mariage ou événement', 'Autre'];
    if (field('website', 120) !== '' || $name === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)
        || !in_array($type, $types, true)
        || ($guests !== '' && (!ctype_digit($guests) || (int) $guests < 1 || (int) $guests > 25))) {
        fail(422, 'invalid');
    }

    $rate = reserveMail();
    if ($rate === 429) {
        header('Retry-After: 3600');
        fail(429, 'limited');
    }
    if ($rate !== 200) {
        fail(503, 'unavailable');
    }

    $body = implode("\r\n", [
        'Nouvelle demande de devis depuis daraichatazarka.com',
        '',
        "Nom : $name",
        "E-mail : $email",
        'Téléphone / WhatsApp : ' . ($phone ?: 'non renseigné'),
        "Type de demande : $type",
        'Dates souhaitées : ' . ($dates ?: 'non renseignées'),
        'Nombre de personnes : ' . ($guests ?: 'non renseigné'),
        '',
        'Message :',
        preg_replace('/\r\n|\r|\n/', "\r\n", $message) ?: '(aucun)',
    ]);
    $sent = @mail(
        'daraichatazarka@gmail.com',
        '[Dar Aicha] Nouvelle demande de devis',
        quoted_printable_encode($body),
        [
            'From' => 'Dar Aicha Tazarka <devis@daraichatazarka.com>',
            'Reply-To' => $email,
            'MIME-Version' => '1.0',
            'Content-Type' => 'text/plain; charset=UTF-8',
            'Content-Transfer-Encoding' => 'quoted-printable',
        ]
    );
    if (!$sent) {
        error_log('Dar Aicha devis: mail transport did not accept the request.');
        fail(503, 'unavailable');
    }
    unset($_SESSION['devis_challenge']);
    session_write_close();
    respond(200, ['ok' => true]);
} catch (Throwable $error) {
    error_log('Dar Aicha devis: ' . get_class($error));
    fail(503, 'unavailable');
}
