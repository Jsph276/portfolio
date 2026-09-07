import { initTheme } from './theme.js';
import { initNavbar } from './navbar.js';
import { initReveal } from './reveal.js';
import { initPortfolioFilters, initDocumentPreviews } from './portfolio.js';
import { initContactForm } from './contact.js';
import { initUi } from './ui.js';

function initApp() {
  initTheme();
  const updateBackToTop = initUi();
  initNavbar(updateBackToTop);
  initReveal();
  initPortfolioFilters();
  initDocumentPreviews();
  initContactForm();
}

document.addEventListener('DOMContentLoaded', initApp);
