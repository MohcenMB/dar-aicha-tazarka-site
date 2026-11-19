(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const button = form.querySelector('[type="submit"]');
  const token = form.elements.namedItem('token');
  const answer = form.elements.namedItem('answer');
  const challenge = document.getElementById('quote-check');
  const question = document.getElementById('quote-question');
  const success = document.getElementById('form-success');
  let pending = false;

  function showError(code) {
    form.querySelectorAll('[data-quote-error]').forEach((item) => {
      item.classList.toggle('hidden', item.dataset.quoteError !== code);
    });
  }

  async function loadChallenge() {
    const response = await fetch(form.action, {
      credentials: 'same-origin',
      headers: { Accept: 'application/json' },
      cache: 'no-store'
    });
    if (!response.ok) throw new Error('challenge unavailable');
    const data = await response.json();
    if (typeof data.token !== 'string' || typeof data.question !== 'string') throw new Error('invalid challenge');
    token.value = data.token;
    question.textContent = data.question;
    answer.value = '';
    answer.required = true;
    challenge.classList.remove('hidden');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (pending || button.disabled) return;
    pending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    showError();
    try {
      if (!token.value) {
        await loadChallenge();
        answer.focus();
        return;
      }
      const response = await fetch(form.action, {
        method: 'POST',
        credentials: 'same-origin',
        headers: { Accept: 'application/json' },
        body: new URLSearchParams(new FormData(form))
      });
      const data = await response.json();
      if (response.ok && data.ok === true) {
        form.reset();
        form.classList.add('hidden');
        success.classList.remove('hidden');
        return;
      }
      if (data.code === 'challenge') {
        token.value = '';
        answer.required = false;
        challenge.classList.add('hidden');
        await loadChallenge();
        answer.focus();
        showError('challenge');
      } else {
        showError(['invalid', 'limited'].includes(data.code) ? data.code : 'unavailable');
      }
    } catch {
      showError('unavailable');
    } finally {
      pending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });

  loadChallenge().catch(() => showError('unavailable')).finally(() => {
    button.disabled = false;
    if (!token.value) answer.required = false;
  });
})();
