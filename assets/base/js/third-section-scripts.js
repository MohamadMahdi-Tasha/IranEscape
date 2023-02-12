// Variables
const thirdSectionPrevBtn = document.querySelector('.third-section__prev-btn');
const thirdSectionNextBtn = document.querySelector('.third-section__next-btn');

// Initilazing Third Sections Slider
const thirdSectionSlider = new Swiper('.third-section__slider', {
    spaceBetween: 25,
    slidesPerView: 4,
    slidesPerGroup: 4,
    autoplay: {delay: 3000,},
    breakpoints: {
        991: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },
        1: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        }
    }
})

// Adding Event Listener On Each Next And Prev Slide That Slides To Next Or Prev Slide
thirdSectionPrevBtn.addEventListener('click', () => thirdSectionSlider.slidePrev());
thirdSectionNextBtn.addEventListener('click', () => thirdSectionSlider.slideNext());