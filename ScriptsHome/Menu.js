AOS.init();
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
  
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('open');
    });