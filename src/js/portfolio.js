export function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('#portfolioGrid .portfolio-item');
  const portfolioGrid = document.getElementById('portfolioGrid');
  if (!filterButtons.length) return;

  let activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'projects';
  let activeCarouselIndex = 0;

  function getVisibleItems() {
    return Array.from(portfolioItems).filter(function (item) {
      return !item.classList.contains('hide');
    });
  }

  function centerCarouselCard(item, behavior) {
    if (!item || !portfolioGrid) return;
    const left = item.offsetLeft - (portfolioGrid.clientWidth - item.offsetWidth) / 2;
    portfolioGrid.scrollTo({ left: Math.max(0, left), behavior: behavior || 'smooth' });
  }

  function updateCarouselPadding() {
    if (!portfolioGrid) return;
    if (!window.matchMedia('(max-width: 991.98px)').matches) {
      portfolioGrid.style.paddingLeft = '';
      portfolioGrid.style.paddingRight = '';
      return;
    }
    const firstItem = getVisibleItems()[0];
    if (!firstItem) return;
    const sidePadding = Math.max(0, (portfolioGrid.clientWidth - firstItem.getBoundingClientRect().width) / 2);
    portfolioGrid.style.paddingLeft = `${sidePadding}px`;
    portfolioGrid.style.paddingRight = `${sidePadding}px`;
  }

  function moveCarousel(direction) {
    if (!portfolioGrid) return;
    if (!window.matchMedia('(max-width: 991.98px)').matches) {
      const card = portfolioGrid.querySelector('.portfolio-item:not(.hide)');
      const distance = card ? card.getBoundingClientRect().width + 16 : 360;
      portfolioGrid.scrollBy({ left: direction * distance, behavior: 'smooth' });
      return;
    }
    const visibleItems = getVisibleItems();
    if (!visibleItems.length) return;
    const viewportCenter = portfolioGrid.getBoundingClientRect().left + portfolioGrid.clientWidth / 2;
    const centeredIndex = visibleItems.reduce(function (closestIndex, item, index) {
      const cardRect = item.getBoundingClientRect();
      const closestRect = visibleItems[closestIndex].getBoundingClientRect();
      const cardDistance = Math.abs(cardRect.left + cardRect.width / 2 - viewportCenter);
      const closestDistance = Math.abs(closestRect.left + closestRect.width / 2 - viewportCenter);
      return cardDistance < closestDistance ? index : closestIndex;
    }, 0);
    activeCarouselIndex = Math.max(0, Math.min(visibleItems.length - 1, centeredIndex + direction));
    centerCarouselCard(visibleItems[activeCarouselIndex]);
  }

  function renderPortfolio() {
    portfolioItems.forEach(function (item) {
      item.classList.toggle('hide', item.dataset.category !== activeFilter);
    });

    requestAnimationFrame(function () {
      updateCarouselPadding();
      if (window.matchMedia('(max-width: 991.98px)').matches) {
        activeCarouselIndex = 0;
        centerCarouselCard(getVisibleItems()[0], 'auto');
      } else {
        portfolioGrid.scrollTo({ left: 0, behavior: 'auto' });
      }
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      activeFilter = button.dataset.filter;
      activeCarouselIndex = 0;
      filterButtons.forEach(function (item) {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
      renderPortfolio();
    });
  });

  document.querySelector('.carousel-prev')?.addEventListener('click', function () {
    moveCarousel(-1);
  });
  document.querySelector('.carousel-next')?.addEventListener('click', function () {
    moveCarousel(1);
  });

  window.addEventListener('resize', updateCarouselPadding);

  renderPortfolio();
}

export function initDocumentPreviews() {
  const modal = document.getElementById('previewModal');
  const modalTitle = document.getElementById('previewModalTitle');
  const modalContent = document.getElementById('previewModalContent');
  if (!modal || !modalTitle || !modalContent) return;

  function closeModal() {
    modal.hidden = true;
    modalContent.replaceChildren();
    document.body.classList.remove('modal-open');
  }

  document.querySelectorAll('[data-preview-close]').forEach(function (element) {
    element.addEventListener('click', closeModal);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  document.querySelectorAll('[data-preview-image]').forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      modalTitle.textContent = trigger.dataset.previewTitle || 'Certificat';
      const image = document.createElement('img');
      image.src = trigger.dataset.previewImage;
      image.alt = modalTitle.textContent;
      modalContent.replaceChildren(image);
      modal.hidden = false;
      document.body.classList.add('modal-open');
    });
  });

  document.querySelectorAll('.preview-document').forEach(function (trigger) {
    trigger.addEventListener('click', function (event) {
      event.preventDefault();
      const documentUrl = trigger.getAttribute('href');
      if (window.matchMedia('(max-width: 767.98px)').matches) {
        window.open(documentUrl, '_blank', 'noopener');
        return;
      }
      modalTitle.textContent = trigger.dataset.previewTitle || 'Document';
      const frame = document.createElement('iframe');
      frame.src = documentUrl;
      frame.title = modalTitle.textContent;
      const download = document.createElement('a');
      download.href = documentUrl;
      download.download = '';
      download.className = 'btn btn-accent preview-modal-download';
      download.textContent = 'Télécharger le CV';
      const wrapper = document.createElement('div');
      wrapper.append(frame, download);
      modalContent.replaceChildren(wrapper);
      modal.hidden = false;
      document.body.classList.add('modal-open');
    });
  });
}
