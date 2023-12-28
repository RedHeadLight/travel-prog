const initToursSlider = () => {
  const swiperEl = document.querySelector('[data-tours]');
  const buttonPrev = document.querySelector('[data-tours-prev]');
  const buttonNext = document.querySelector('[data-tours-next]');

  /* eslint-disable */
  const swiper = new Swiper(swiperEl, {
  /* eslint-enable */
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 19,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 19,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  return swiper;
};

export {initToursSlider};
