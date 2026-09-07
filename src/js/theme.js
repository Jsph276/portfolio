export function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const htmlEl = document.documentElement;

  if (!themeToggle || !themeIcon) return;

  function applyTheme(theme) {
    if (theme === 'dark') {
      htmlEl.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-stars-fill');
    } else {
      htmlEl.removeAttribute('data-theme');
      themeIcon.classList.remove('bi-moon-stars-fill');
      themeIcon.classList.add('bi-sun-fill');
    }
  }

  applyTheme(localStorage.getItem('portfolio-theme') || 'light');

  themeToggle.addEventListener('click', function () {
    const current = htmlEl.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'light' ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('portfolio-theme', next);
  });
}
