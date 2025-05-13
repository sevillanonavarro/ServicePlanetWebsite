document.addEventListener("DOMContentLoaded", function () {
  const scrollLeftBtn = document.getElementById("scrollLeft");
  const scrollRightBtn = document.getElementById("scrollRight");
  const serviceTabsWrapper = document.querySelector(".service-tabs-wrapper");
  const firstTabButton = document.querySelector(".tab-button");

  if (!scrollLeftBtn || !scrollRightBtn || !serviceTabsWrapper || !firstTabButton) return;


  scrollLeftBtn.addEventListener("click", () => {
    const firstTabButton = document.querySelector(".tab-button");
    if (!firstTabButton) return;
    const scrollAmount = firstTabButton.offsetWidth;
    serviceTabsWrapper.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  scrollRightBtn.addEventListener("click", () => {
    const firstTabButton = document.querySelector(".tab-button");
    if (!firstTabButton) return;
    const scrollAmount = firstTabButton.offsetWidth;
    serviceTabsWrapper.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

