  const slides = document.querySelectorAll('.parallax-slideshow .slide');
  const bars = document.querySelectorAll('.slide-bars .bar');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let index = 0;
  let slideInterval;

  function showSlide(n) {
    slides.forEach((slide, i) => slide.classList.toggle('active', i === n));
    bars.forEach((bar, i) => bar.classList.toggle('active', i === n));
    index = n;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  nextBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    nextSlide();
    startAutoSlide();
  });
  prevBtn.addEventListener('click', () => {
    clearInterval(slideInterval);
    prevSlide();
    startAutoSlide();
  });

  bars.forEach(bar => {
    bar.addEventListener('click', () => {
      clearInterval(slideInterval);
      const n = parseInt(bar.getAttribute('data-slide'));
      showSlide(n);
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  startAutoSlide();