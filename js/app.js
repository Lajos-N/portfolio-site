// page copyright year
const $year = document.querySelector('#year').innerHTML = new Date().getFullYear();

// hamburger menu
const $hamburgerMenu = document.querySelector('.js-hamburger-menu');
const $hamburgerMenuIcon = document.querySelector('.js-hamburger-menu-icon');

$hamburgerMenu.addEventListener('click', () => {
    $hamburgerMenuIcon.classList.toggle('active');
});
