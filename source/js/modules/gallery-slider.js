const initGallerySlider = () => {
  const swiperEl = document.querySelector('[data-gallery]');
  const buttonPrev = document.querySelector('[data-gallery-prev]');
  const buttonNext = document.querySelector('[data-gallery-next]');

  /* eslint-disable */
  const swiper = new Swiper(swiperEl, {
  /* eslint-enable */
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    slidesPerView: 'auto',
  });

  return swiper;
};

export {initGallerySlider};
