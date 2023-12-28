const initAdvSlider = () => {
  const swiperEl = document.querySelector('[data-adv]');
  const buttonPrev = document.querySelector('[data-adv-prev]');
  const buttonNext = document.querySelector('[data-adv-next]');

  /* eslint-disable */
  const swiper = new Swiper(swiperEl, {
  /* eslint-enable */
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    slidesPerView: 'auto',
    centeredSlides: true,

    breakpoints: {
      1200: {
        spaceBetween: 30,
      },
    },
  });

  return swiper;
};

export {initAdvSlider};
