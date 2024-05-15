'use strict';

const skills = document.querySelectorAll(".skill-offering");
const navMenuButton = document.querySelector("#btn");
const navMenu = document.querySelector("#menu");
const screenEvent = document.querySelector("#screen-event");
const navContainer = document.querySelector("#navcontainer");


const observer = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
        navContainer.classList.toggle('fade')
    })
}, 
{
    threshold: 1,
}

);

skills.forEach(card => {
    observer.observe(card);
})



/**On Click Screen Events */
navMenuButton.onclick = function() {openMenu()};
screenEvent.onclick = function() {closeMenu()};



/**Functions */
function openMenu() {

    console.log('Open Menu');
    navMenu.classList.toggle('show');
    
};

function closeMenu() {

    console.log('Closing Menu');
    navMenu.classList.toggle('show');
};