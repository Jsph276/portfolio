export function initNavbar(onScroll) {
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('main section[id], header#hero');
  const navMenu = document.getElementById('navMenu');
  const navToggler = document.querySelector('.navbar-toggler');

  if (!mainNav || !navMenu) return;

  function setMenuState(isOpen) {
    navToggler?.classList.toggle('is-open', isOpen);
    navToggler?.setAttribute('aria-expanded', String(isOpen));
    navToggler?.setAttribute('aria-label', isOpen ? 'Fermer la navigation' : 'Ouvrir la navigation');
  }

  navMenu.addEventListener('shown.bs.collapse', function () {
    setMenuState(true);
  });
  navMenu.addEventListener('hidden.bs.collapse', function () {
    setMenuState(false);
  });

  function updateActiveLink() {
    let currentSection = 'hero';
    const scrollPos = window.scrollY + 160;

    sections.forEach(function (section) {
      if (scrollPos >= section.offsetTop) currentSection = section.id;
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.dataset.section === currentSection);
    });
  }

  window.addEventListener('scroll', function () {
    mainNav.classList.toggle('scrolled', window.scrollY > 40);
    updateActiveLink();
    if (onScroll) onScroll();
  });

  document.querySelectorAll('#navMenu a, #navMenu button').forEach(function (item) {
    item.addEventListener('click', function () {
      if (navMenu.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });

  updateActiveLink();
}
