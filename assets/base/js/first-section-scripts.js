// Codes By Mahdi Tasha
// Variables
const firstSectRightSliderNextSlideBtn = document.querySelector('.first-sect-right-slider__next-slide-btn');
const firstSectRightSliderPrevSlideBtn = document.querySelector('.first-sect-right-slider__prev-slide-btn');
const firstSectLeftSliderNextSlideBtn = document.querySelector('.first-sect-left-slider__next-slide-btn');
const firstSectLeftSliderPrevSlideBtn = document.querySelector('.first-sect-left-slider__prev-slide-btn');

// Setting Sliders
const firstSectionRightSlider = new Swiper('.first-sect-right-slider', {
    spaceBetween: 25,
    autoplay: {
        delay: 5000,
    },
})
const firstSectionLeftSlider = new Swiper('.first-sect-left-slider', {
    spaceBetween: 25,
    autoplay: {
        delay: 3000,
    },
})

// Adding Event Listener On Each Next And Prev Slide That Slides To Next Or Prev Slide
firstSectRightSliderNextSlideBtn.addEventListener('click', () => {firstSectionRightSlider.slideNext()})
firstSectRightSliderPrevSlideBtn.addEventListener('click', () => {firstSectionRightSlider.slidePrev()})
firstSectLeftSliderNextSlideBtn.addEventListener('click', () => {firstSectionLeftSlider.slideNext()})
firstSectLeftSliderPrevSlideBtn.addEventListener('click', () => {firstSectionLeftSlider.slidePrev()})

// Adding Event Listener Of 'slideChange' Which Is Triggered When Slider Changes On 'firstSectionRightSlider' That ...
firstSectionRightSlider.on('slideChange', () => {
    // Vairbales
    const activePaginationItem = document.querySelector('.first-sect-right-slider__pagination-item--active');
    const paginationToActivate = document.querySelector(`.first-sect-right-slider__pagination > .first-sect-right-slider__pagination-item:nth-of-type(${firstSectionRightSlider.activeIndex + 1})`);

    // If Active Index Of Slider Is 3 Then Remove Class Of 'first-sect-right-slider__next-slide-btn--active' From 'firstSectRightSliderNextSlideBtn'
    // And Add It To 'firstSectRightSliderPrevSlideBtn'.Otherwise If Active Index Of Slider Is 0 Then Add The Class To 'firstSectRightSliderNextSlideBtn'
    // And Remove It From 'firstSectRightSliderPrevSlideBtn'. Otherwise  If Active Index Wasnt 3 Or 0 Then Add The CLass To Both Buttons
    if (firstSectionRightSlider.activeIndex === 3) {
        firstSectRightSliderNextSlideBtn.classList.remove('first-sect-right-slider__next-slide-btn--active');
        firstSectRightSliderPrevSlideBtn.classList.add('first-sect-right-slider__prev-slide-btn--active');
    } else if (firstSectionRightSlider.activeIndex === 0)  {
        firstSectRightSliderNextSlideBtn.classList.add('first-sect-right-slider__next-slide-btn--active');
        firstSectRightSliderPrevSlideBtn.classList.remove('first-sect-right-slider__prev-slide-btn--active');
    } else if (firstSectionRightSlider.activeIndex !== 0 || firstSectionRightSlider.activeIndex !== 3){
        firstSectRightSliderNextSlideBtn.classList.add('first-sect-right-slider__next-slide-btn--active');
        firstSectRightSliderPrevSlideBtn.classList.add('first-sect-right-slider__prev-slide-btn--active');
    }

    // Adding Class Of 'first-sect-right-slider__pagination-item--active' To 'paginationToActivate' And Removing It From 'activePaginationItem'
    activePaginationItem.classList.remove('first-sect-right-slider__pagination-item--active');
    paginationToActivate.classList.add('first-sect-right-slider__pagination-item--active');
})

// Adding Event Listener Of 'slideChange' Which Is Triggered When Slider Changes On 'firstSectionLeftSlider' That ...
firstSectionLeftSlider.on('slideChange', () => {
    // Variables
    const activePaginationItem = document.querySelector('.first-sect-left-slider__pagination-item--active');
    const paginationToActivate = document.querySelector(`.first-sect-left-slider__pagination-holder > .first-sect-left-slider__pagination-item:nth-of-type(${firstSectionLeftSlider.activeIndex + 1})`);

    // Adding Class Of 'first-sect-left-slider__pagination-item--active' To 'paginationToActivate' And Removing It From 'activePaginationItem'
    activePaginationItem.classList.remove('first-sect-left-slider__pagination-item--active');
    paginationToActivate.classList.add('first-sect-left-slider__pagination-item--active');
})