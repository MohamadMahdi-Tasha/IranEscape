// Variables
const firstSectRightSideSliderNextButton = document.querySelector('.first-sect-right-side-slider .next-slide-btn');
const firstSectRightSideSliderPrevButton = document.querySelector('.first-sect-right-side-slider .prev-slide-btn');
const firstSectRightSideSlider = new Swiper('.first-sect-right-side-slider', {
    spaceBetween: 30,
    autoplay: {delay: 5000,},
})

// Adding Event Listener On Prev And Next Button That Listens To Click And Slides The Slider To Prev Or Next Slide
firstSectRightSideSliderNextButton.addEventListener('click', () => firstSectRightSideSlider.slideNext())
firstSectRightSideSliderPrevButton.addEventListener('click', () => firstSectRightSideSlider.slidePrev())

// Adding Event Listener To  'firstSectRightSideSlider' That Listens To Slide Change And  ....
firstSectRightSideSlider.on('slideChange', () => {
    // Variables
    const currentIndexOfSlider = firstSectRightSideSlider.activeIndex + 1;
    const firstSectRightSideSliderPaginationItemActive = document.querySelector('.first-sect-right-side-slider .pagination-item.active')
    const firstSectRightSideSliderPaginationItemToActive = document.querySelector(`.first-sect-right-side-slider .pagination-item:nth-of-type(${currentIndexOfSlider})`)

    // DeActivating The Active Pagination Item And Activating The One That Needs To
    firstSectRightSideSliderPaginationItemActive.classList.remove('active');
    firstSectRightSideSliderPaginationItemToActive.classList.add('active');

    // Checking If Current Index Of Slider Is 4 Then Remove Class Of 'active' From 'firstSectRightSideSliderNextButton'
    if (currentIndexOfSlider === 4) {
        firstSectRightSideSliderNextButton.classList.remove('active')
    }
    // Checking If Current Index Of Slider Is 1 Then Remove Class Of 'active' From 'firstSectRightSideSliderPrevButton'
    else if (currentIndexOfSlider === 1) {
        firstSectRightSideSliderPrevButton.classList.remove('active')
    }
    // else if Current Index Of Slider Was Not 4 Or 1 Then Add Class Of 'active' To Prev And Next Buttons
    else {
        firstSectRightSideSliderNextButton.classList.add('active')
        firstSectRightSideSliderPrevButton.classList.add('active')
    }
})