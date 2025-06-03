document.addEventListener("DOMContentLoaded", function () {
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");
  const serviceTabsWrapper = document.querySelector(".service-tabs-wrapper");
  const firstTabButton = document.querySelector(".tab-button");

  if (!scrollLeftBtn || !scrollRightBtn || !serviceTabsWrapper || !firstTabButton) return;

  scrollLeftBtn.addEventListener("click", () => {
    const scrollAmount = firstTabButton.offsetWidth;
    serviceTabsWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    const scrollAmount = firstTabButton.offsetWidth;
    serviceTabsWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  // Activar por defecto el botón con data-categorie="cyric"
  const defaultTab = document.querySelector('.tab-button[data-categorie="cyric"]');
  if (defaultTab) {
    defaultTab.click();
  }
});

document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetCategory = button.getAttribute('data-categorie');

    // 1. Ocultar/mostrar categorías
    document.querySelectorAll('.categorie').forEach(cat => {
      const catCategory = cat.getAttribute('data-categorie');
      cat.classList.toggle('desactivate', catCategory !== targetCategory);
    });

    // 2. Gestionar la clase 'tab-activate' en los botones
    document.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('tab-activate');
    });

    button.classList.add('tab-activate');
  });
});
