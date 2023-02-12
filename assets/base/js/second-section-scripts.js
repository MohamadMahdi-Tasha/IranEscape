// Vairbles
const secondSectionNextBtn = document.querySelector('.second-section__next-btn');
const secondSectionPrevBtn = document.querySelector('.second-section__prev-btn');

// Setting Second Sections Slider
const secondSectionSlider = new Swiper('.second-section__slider', {
    spaceBetween: 100,
    autoplay: {
        delay: 3000,
    },
})

// Adding Event Listener On Each Next And Prev Slide That Slides To Next Or Prev Slide
secondSectionNextBtn.addEventListener('click', () => secondSectionSlider.slideNext())
secondSectionPrevBtn.addEventListener('click', () => secondSectionSlider.slidePrev())

// Adding Event Listener Of 'slideChange' Which Is Triggered When Slider Changes On 'secondSectionSlider' That ...
secondSectionSlider.on('slideChange', () => {
    // Variables
    const activePaginationItem = document.querySelector('.second-section__pagination-item--active');
    const paginationToActivate = document.querySelector(`.second-section__pagination > .second-section__pagination-item:nth-of-type(${secondSectionSlider.activeIndex + 1})`);

    // Adding Class Of 'second-section__pagination-item--active' To 'paginationToActivate' And Removing It From 'activePaginationItem'
    activePaginationItem.classList.remove('second-section__pagination-item--active');
    paginationToActivate.classList.add('second-section__pagination-item--active');
})