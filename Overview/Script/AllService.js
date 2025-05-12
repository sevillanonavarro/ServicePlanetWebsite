const tabsWrapper = document.querySelector('.service-tabs-wrapper');
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabWidth = tabButtons[0].offsetWidth + 1; // botón + margen

  function getScrollAmount() {
    const width = window.innerWidth;

    if (width >= 1200) return tabWidth * 1; // pantallas grandes
    if (width >= 768) return tabWidth * 3;  // pantallas medianas
    return tabWidth * 1;                    // pantallas pequeñas
  }

  document.getElementById('scrollLeft').addEventListener('click', () => {
    tabsWrapper.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
  });

  document.getElementById('scrollRight').addEventListener('click', () => {
    tabsWrapper.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
  });

  // (Opcional) actualizar tamaño al redimensionar
  window.addEventListener('resize', () => {
    // Si cambias el diseño con media queries, puedes recalcular aquí si hace falta
  });

