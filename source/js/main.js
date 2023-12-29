import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

/* eslint-disable */
import {Swiper} from './vendor/swiper';
/* eslint-enable */

import {initHeroSlider} from './modules/hero-slider';
import {initToursSlider} from './modules/tours-slider';
import {initTrainersSlider} from './modules/trainers-slider';
import {initReviewsSlider} from './modules/reviews-slider';
import {initAdvSlider} from './modules/adv-slider';
import {initGallerySlider} from './modules/gallery-slider';
import {initMenu} from './modules/menu';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {
    initModals();

    initMenu();

    initHeroSlider();
    initToursSlider();
    initTrainersSlider();
    initReviewsSlider();
    initGallerySlider();

    let advSlider = null;

    if (window.matchMedia('(min-width: 1200px)').matches) {
      advSlider = initAdvSlider();
    }

    window.addEventListener('resize', () => {
      if (!window.matchMedia('(min-width: 1200px)').matches && advSlider) {
        advSlider.destroy();
        advSlider = null;
      }
      if (window.matchMedia('(min-width: 1200px)').matches && !advSlider) {
        advSlider = initAdvSlider();
      }
    });

    const form = new Form();
    window.form = form;
    form.init();
  });
});
