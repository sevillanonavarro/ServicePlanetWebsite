document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const slider = document.querySelector('.card-slider');
    const exit = document.getElementById('select-exit');
  
    slides.forEach((_, index) => {
      const button = document.createElement('div');
      button.classList.add('slider-button');
      if (index === 0) button.classList.add('active');
  
      button.addEventListener('click', () => {
        const slideWidth = 50; // 40% width + 5% margin
        const maxTranslate = (slides.length - 1) * slideWidth;
        const translate = Math.min(index * slideWidth, maxTranslate);
        slider.style.transform = `translateX(-${translate}%)`
        document.querySelectorAll('.slider-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
  
      exit.appendChild(button);
    });
  });