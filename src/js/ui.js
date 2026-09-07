export function initUi() {
  const backToTopButton = document.getElementById('backToTop');

  function updateBackToTop() {
    if (backToTopButton) backToTopButton.classList.toggle('show', window.scrollY > 300);
  }

  if (backToTopButton) {
    backToTopButton.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    updateBackToTop();
  }

  document.querySelectorAll('.ripple').forEach(function (button) {
    button.addEventListener('click', function (event) {
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const rect = button.getBoundingClientRect();
      const circle = document.createElement('span');
      circle.className = 'ripple-circle';
      circle.style.width = circle.style.height = diameter + 'px';
      circle.style.left = (event.clientX - rect.left - diameter / 2) + 'px';
      circle.style.top = (event.clientY - rect.top - diameter / 2) + 'px';
      const existing = button.querySelector('.ripple-circle');
      if (existing) existing.remove();
      button.appendChild(circle);
      setTimeout(function () { circle.remove(); }, 600);
    });
  });

  return updateBackToTop;
}
