// script.js — Dar Aïcha Tazarka

// ---------- Theme toggle ----------
(function () {
  const t = document.querySelector('[data-theme-toggle]');
  const r = document.documentElement;
  let d = matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  r.setAttribute('data-theme', d);
  updateIcon();
  t &&
    t.addEventListener('click', () => {
      d = d === 'dark' ? 'light' : 'dark';
      r.setAttribute('data-theme', d);
      updateIcon();
    });
  function updateIcon() {
    if (!t) return;
    t.setAttribute('aria-label', 'Passer en mode ' + (d === 'dark' ? 'clair' : 'sombre'));
    t.innerHTML =
      d === 'dark'
        ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }
})();

// ---------- Mobile nav ----------
(function () {
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-main-nav]');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
})();

// ---------- Scroll reveal ----------
(function () {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || !els.length) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => io.observe(el));
})();

// ---------- Lightbox ----------
(function () {
  const lightbox = document.querySelector('[data-lightbox]');
  if (!lightbox) return;
  const img = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('[data-lightbox-close]');
  document.querySelectorAll('[data-lightbox-trigger]').forEach((el) => {
    el.addEventListener('click', () => {
      const src = el.getAttribute('data-full') || el.src;
      img.src = src;
      img.alt = el.alt || '';
      lightbox.classList.add('is-open');
    });
  });
  function close() {
    lightbox.classList.remove('is-open');
    img.src = '';
  }
  closeBtn && closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();

// ---------- Booking form (no backend — mailto/WhatsApp handoff) ----------
(function () {
  const form = document.querySelector('[data-booking-form]');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const nom = data.get('nom') || '';
    const arrivee = data.get('arrivee') || '';
    const depart = data.get('depart') || '';
    const voyageurs = data.get('voyageurs') || '';
    const message = data.get('message') || '';
    const type = data.get('type') || 'Séjour';
    const text = encodeURIComponent(
      `Bonjour, je suis ${nom}. Je souhaite une demande de devis pour : ${type}.\nArrivée : ${arrivee}\nDépart : ${depart}\nNombre de personnes : ${voyageurs}\nMessage : ${message}`
    );
    window.open(`https://wa.me/68987717863?text=${text}`, '_blank');
  });
})();

// ---------- Current year ----------
(function () {
  const y = document.querySelector('[data-year]');
  if (y) y.textContent = new Date().getFullYear();
})();
