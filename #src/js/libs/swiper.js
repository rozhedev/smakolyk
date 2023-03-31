import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const promoSlider = new Swiper('.promo-slider', {
    // Optional parameters
    modules: [Navigation, Pagination, Autoplay],
    loop: false,
    autoplay: {
        delay: 5000,
    },
    pauseOnMouseEnter: true,

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