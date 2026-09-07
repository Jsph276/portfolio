export function initReveal() {
  const targets = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
  if (!targets.length || !window.IntersectionObserver) return;

  const observer = new IntersectionObserver(function (entries, currentObserver) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (target) { observer.observe(target); });
}

