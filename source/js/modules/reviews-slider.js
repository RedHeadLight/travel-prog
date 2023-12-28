const initReviewsSlider = () => {
  const swiperEl = document.querySelector('[data-reviews]');
  const buttonPrev = document.querySelector('[data-reviews-prev]');
  const buttonNext = document.querySelector('[data-reviews-next]');

  /* eslint-disable */
  const swiper = new Swiper(swiperEl, {
  /* eslint-enable */
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    slidesPerView: 'auto',

    breakpoints: {
      0: {
        spaceBetween: 30,
      },
      768: {
        spaceBetween: 30,
      },
      1200: {
        spaceBetween: 120,
      },
    },
  });

  return swiper;
};

export {initReviewsSlider};
