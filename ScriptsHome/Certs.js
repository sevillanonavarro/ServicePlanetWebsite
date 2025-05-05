const sliderTrack = document.getElementById("awardSliderTrack");
const prevArrow = document.getElementById("awardSliderPrev");
const nextArrow = document.getElementById("awardSliderNext");

const totalImages = sliderTrack.children.length;
const imagesVisible = 5;
const imageGap = 20;
let currentIndex = 0;

const moveSlider = () => {
  const singleImage = sliderTrack.querySelector("img");
  const imageTotalWidth = singleImage.offsetWidth + imageGap;
  const maxIndex = totalImages - imagesVisible;
  if (currentIndex < 0) currentIndex = maxIndex;
  if (currentIndex > maxIndex) currentIndex = 0;
  sliderTrack.style.transform = `translateX(-${currentIndex * imageTotalWidth}px)`;
};

prevArrow.addEventListener("click", () => {
  currentIndex--;
  moveSlider();
});

nextArrow.addEventListener("click", () => {
  currentIndex++;
  moveSlider();
});

// Auto-slide
setInterval(() => {
  currentIndex++;
  moveSlider();
}, 3000);