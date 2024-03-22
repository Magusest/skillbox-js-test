import Swiper from "swiper";

const sliderContainer = document.querySelector('[data-card-slider="parent"]');


export default function initSlider() {
    if (!sliderContainer) {
        return;
    }

const sliderWrapper = sliderContainer.querySelector('[data-card-slider="wrapper"]');
const sliderSlide = sliderContainer.querySelector('[data-card-slider="slide"]');
const buttonNext = sliderContainer.querySelector('[data-card-slider="next"]');
const buttonPrev = sliderContainer.querySelector('[data-card-slider="prev"]');


    const swiper = new Swiper(sliderContainer, {
        slideClass: sliderSlide.className,
        wrapperClass: sliderWrapper.className,

        breakpoints: {
            320: {
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 14,
            },
            1341: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        },

        observer: true,
        loop: true,
      });

      buttonNext.addEventListener('click', () => swiper.slideNext(500, true))
      buttonPrev.addEventListener('click', () => swiper.slidePrev(500, true))

      return swiper;
}
