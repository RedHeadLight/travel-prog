const initHeroSlider = () => {
  const swiperEl = document.querySelector('[data-hero]');
  const pagination = document.querySelector('[data-hero-pagination]');

  /* eslint-disable */
  const swiper = new Swiper(swiperEl, {
  /* eslint-enable */
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
  });

  return swiper;
};

export {initHeroSlider};
