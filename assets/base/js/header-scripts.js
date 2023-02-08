// Codes By Mahdi Tasha
// Variables
const mobileNavToggler = document.querySelector('.mobile-nav-toggler');
const mobileNavHolder = document.querySelector('.mobile-nav__holder');
const mobileNavBg = document.querySelector('.mobile-nav__bg');
const headerSearchBtnInnerHolder = document.querySelector('.header__search-btn');
const headerSelectCityBtn = document.querySelector('.header__select-city-btn');
const selectedCityTextSpanInHeaderSelectCityBtn = document.querySelector('.header__select-city-txt');
const selectCityModal = document.querySelector('.my-modal__holder--select-city');
const selectCityModalBg = document.querySelector('.my-modal__bg');
const selectCityModalCloseBtn = document.querySelector('.my-modal__close-btn');
const selectCityModalBtn = document.querySelectorAll('.select-city__btn');
const activeSelectCityBtn = document.querySelector('.select-city__btn--active');
const selectCitySearchInput = document.querySelector('.my-modal__search-input');
const selectCityBtnsListOrginal = document.querySelector('.select-city__buttons-list-orignial');
const selectCityBtnsListFake = document.querySelector('.select-city__buttons-list-fake');
const headerMainContent = document.querySelector('.header__main-content');

const selectedCityInLocalStoarge = localStorage.getItem('selectedCity');

// A Function That Takes English Name Of City And Checks It Then Returns Persian Name Of City
function persianNameOfCityFromEnglishName(englishName) {
    let persianName;

    switch (englishName) {
        case 'tehran': persianName = 'تهران';break;
        case 'shiraz': persianName = 'شیراز';break;
        case 'esfahan': persianName = 'اصفهان';break;
        case 'mashhad': persianName = 'مشهد';break;
        case 'rasht': persianName = 'رشت';break;
    }

    return persianName;
}

// A Function That Takes Persian Name Of City And Checks It Then Returns English Name Of City
function englishNameOfCityFromPersianName(persianName) {
    let englishName;

    switch (persianName) {
        case 'تهران': englishName = 'tehran';break;
        case 'شیراز': englishName = 'shiraz';break;
        case 'اصفهان': englishName = 'esfahan';break;
        case 'مشهد': englishName = 'mashhad';break;
        case 'رشت': englishName = 'rasht';break;
    }

    return englishName;
}

// A Function That Handles Click Of Buttons In Select City Modal (City)
function selectCityModalButtonsAction(btn) {
    localStorage.setItem('selectedCity', englishNameOfCityFromPersianName(btn.textContent))

    btn.classList.add('select-city__btn--active')
    activeSelectCityBtn.classList.remove('select-city__btn--active');
    selectCityModal.classList.remove('my-modal__holder--opened')
    selectedCityTextSpanInHeaderSelectCityBtn.textContent = btn.textContent;
}

// Adding Event Listener Of Load To Window That Shows Selected City
window.addEventListener('load', () => {
    if (selectedCityInLocalStoarge === null) {
        localStorage.setItem('selectedCity', 'tehran')
        selectedCityTextSpanInHeaderSelectCityBtn.textContent = persianNameOfCityFromEnglishName(selectedCityInLocalStoarge)
    } else {
        let modalBtnToActivate;

        selectCityModalBtn.forEach(item => {if (item.textContent === persianNameOfCityFromEnglishName(selectedCityInLocalStoarge)) {modalBtnToActivate = item}})

        activeSelectCityBtn.classList.remove('select-city__btn--active');
        modalBtnToActivate.classList.add('select-city__btn--active')

        selectedCityTextSpanInHeaderSelectCityBtn.textContent = persianNameOfCityFromEnglishName(selectedCityInLocalStoarge)
    }
})

// Adding Event Listener Of Keydown To Window That Checks If Clicked Key Was Escape Key Then Closes Mobile Nav And Select City Modal
window.addEventListener('keydown', (event) => {
    const clickedKey = event.key.toLowerCase();

    if (clickedKey === 'escape') {
        if (mobileNavHolder.classList.contains('mobile-nav__holder--opened')) {mobileNavHolder.classList.remove('mobile-nav__holder--opened')}
        if (selectCityModal.classList.contains('my-modal__holder--opened')) {selectCityModal.classList.remove('my-modal__holder--opened')}
    }
})

// Adding Event Listener Of Click To Search Btn In Header That Toggles Class Of 'header__main-content--search' To Main Content Of Header
headerSearchBtnInnerHolder.addEventListener('click', () => headerMainContent.classList.toggle('header__main-content--search'))

// Adding Event Listener Of Click To Mobile Nav Toggler That Adds Class Of 'mobile-nav__holder--opened' To Mobile Nav Holder And Adds Class Of 'overflow-hidden' To Body To Disable Scrolling
mobileNavToggler.addEventListener('click', () => {mobileNavHolder.classList.add('mobile-nav__holder--opened');document.body.classList.add('overflow-hidden');})

// Adding Event Listener Of Click To Background Of Mobile Nav That Removes Class Of 'mobile-nav__holder--opened' To Mobile Nav Holder And Removes Class Of 'overflow-hidden' To Body To Disable Scrolling
mobileNavBg.addEventListener('click', () => {mobileNavHolder.classList.remove('mobile-nav__holder--opened');document.body.classList.remove('overflow-hidden');})

// Adding Event Listener Of Input To Input In Select City Modal Which Shows Citys That Start With Typed Value Of Input
selectCitySearchInput.addEventListener('input', () => {
    const arrayToShow = [];

    selectCityBtnsListOrginal.classList.add('d-none');
    selectCityBtnsListFake.classList.remove('d-none');

    selectCityBtnsListFake.childNodes.forEach(item => item.remove())

    if (selectCitySearchInput.value !== '') {
        document.querySelectorAll('.select-city__buttons-list-orignial button').forEach(btn => {
            if (btn.textContent.startsWith(selectCitySearchInput.value)) {
                arrayToShow.push(btn);
            }
        })

        arrayToShow.forEach(btn => {
            const createdLi = document.createElement('li');
            const clonedBtn = btn.cloneNode(true);

            clonedBtn.setAttribute('onclick', 'selectCityModalButtonsAction(this)')

            createdLi.appendChild(clonedBtn);
            selectCityBtnsListFake.appendChild(createdLi);
        })
    } else {
        selectCityBtnsListOrginal.classList.remove('d-none');
        selectCityBtnsListFake.classList.add('d-none');
    }
})

// Adding Event Listener Of Click To Select City Modal Toggler In Header That Adds Class Of 'my-modal__holder--opened' To The Modal And Also Adds Class Of 'overflow-hidden' To Body Of Page To Disable Scrolling
headerSelectCityBtn.addEventListener('click', () => {selectCityModal.classList.add('my-modal__holder--opened');document.body.classList.add('overflow-hidden');})

// Adding Event Listener Of Click To Select City Modal Background In Header That Remove Class Of 'my-modal__holder--opened' To The Modal And Also Remove Class Of 'overflow-hidden' To Body Of Page To Disable Scrolling
selectCityModalBg.addEventListener('click', () => {selectCityModal.classList.remove('my-modal__holder--opened');document.body.classList.remove('overflow-hidden');})

// Adding Event Listener Of Click To Select City Modal Close Button In Header That Remove Class Of 'my-modal__holder--opened' To The Modal And Also Remove Class Of 'overflow-hidden' To Body Of Page To Disable Scrolling
selectCityModalCloseBtn.addEventListener('click', () => {selectCityModal.classList.remove('my-modal__holder--opened');document.body.classList.remove('overflow-hidden');})

// Adding Event Listener Of Click To Each Select City Buttons In Select City Modal That Calls 'selectCityModalButtonsAction' Function On Each Of Them
selectCityModalBtn.forEach(btn => btn.addEventListener('click', () => selectCityModalButtonsAction(btn)))