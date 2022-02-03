/* eslint-disable no-unused-vars */
import Swiper from 'swiper/swiper-bundle';

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',

  coverflowEffect: {
    rotate: 75,
    slideShadows: false,
  },

  direction: 'horizontal',
  loop: true,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  a11y: {
    firstSlideMessage: 'This is the first slide',
    lastSlideMessage: 'This is the last slide',
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
    paginationBulletMessage: 'Go to slide {{index}}',
  },
});
