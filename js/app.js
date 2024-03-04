window.onload = () => {
    copyrightYear();
};

// page copyright year
const copyrightYear = () => {
    const creationYear = 2023;
    const $year = document.querySelector('#year');
    if (new Date().getFullYear() > creationYear) {
        $year.innerHTML = `${creationYear} - ${new Date().getFullYear()}`;
    } else {
        $year.innerHTML = new Date().getFullYear();
    }
};

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
