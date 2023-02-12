// Variable
const fifthSectionQaItemTogglers = document.querySelectorAll('.fifth-section__qa-item-toggler');

// Adding Event Listener Of Click To Each Qa Item Toggler That Toggles Class Of 'fifth-section__qa-item--opened' To Item Of Toggler
fifthSectionQaItemTogglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        const togglerItem = toggler.parentElement;

        togglerItem.classList.toggle('fifth-section__qa-item--opened')
    })
})