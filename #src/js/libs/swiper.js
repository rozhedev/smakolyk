import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import {BP_LIST} from '../values';

if (window.innerWidth > BP_LIST.sm) {
    const promoSlider = new Swiper('.promo-slider', {
        // Optional parameters
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        autoplay: {
            delay: 5000,
        },
        // If we need autoplay pause, when mouse hover on slide
        // pauseOnMouseEnter: true,
    
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
}