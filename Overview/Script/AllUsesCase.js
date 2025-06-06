document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.slider-container');
  
    sliders.forEach((sliderContainer) => {
      const slider = sliderContainer.querySelector('.card-slider');
      const slides = slider.querySelectorAll('.slide');
      const navContainer = sliderContainer.parentElement.querySelector('.buttons-select');
  
      // Si solo hay una slide, centramos y no generamos botones
      if (slides.length <= 1) {
        slider.style.justifyContent = 'center'; // Centra el único slide
        slider.style.transform = 'none';
  
        // Ajustes adicionales para centrar correctamente la única tarjeta
        slides[0].style.marginRight = '0';
        return;
      }
  
      // Para múltiples slides, generamos botones
      slides.forEach((_, index) => {
        const button = document.createElement('div');
        button.classList.add('slider-button');
        if (index === 0) button.classList.add('active');
  
        button.addEventListener('click', () => {
          const slideWidth = 63; // 65 Lo deja exacto
          const maxTranslate = (slides.length - 1) * slideWidth;
          const translate = Math.min(index * slideWidth, maxTranslate);
          slider.style.transform = `translateX(-${translate}%)`;
  
          navContainer.querySelectorAll('.slider-button').forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
        });
  
        navContainer.appendChild(button);
      });
    });
  });
  