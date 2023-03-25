import Swiper, { Navigation, Pagination } from 'swiper';

const promoSlider = new Swiper('.promo-slider', {
    // Optional parameters
    modules: [Navigation, Pagination],
    loop: false,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });