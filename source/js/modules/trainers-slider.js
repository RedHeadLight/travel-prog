const initTrainersSlider = () => {
  const swiperEl = document.querySelector('[data-trainers]');
  const buttonPrev = document.querySelector('[data-trainers-prev]');
  const buttonNext = document.querySelector('[data-trainers-next]');

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
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });

  return swiper;
};

export {initTrainersSlider};
