// page copyright year
const $year = document.querySelector('#year').innerHTML = new Date().getFullYear();

// hamburger menu
const $hamburgerMenu = document.querySelector('.js-hamburger-menu');
const $hamburgerMenuIcon = document.querySelector('.js-hamburger-menu-icon');
const $hamburgerMenuList = document.querySelector('nav ul');
const $bodyScrolling = document.querySelector('body');

$hamburgerMenu.addEventListener('click', () => {
    $hamburgerMenuIcon.classList.toggle('active');
    $hamburgerMenuList.classList.toggle('is-active');
    $bodyScrolling.classList.toggle('stop-scrolling');
});
