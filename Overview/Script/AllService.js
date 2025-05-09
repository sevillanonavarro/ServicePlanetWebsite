const track = document.getElementById('sliderTrack');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let currentSlide = 0;

  nextBtn.addEventListener('click', () => {
    const totalGroups = track.children.length;
    if (currentSlide < totalGroups - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  function updateSlider() {
    track.style.transform = `translateX(-${100 * currentSlide}%)`;
  }


