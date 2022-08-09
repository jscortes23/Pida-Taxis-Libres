/* Close and open menu*/
const btnMenu = document.querySelector('.btn-n-menu');
const homeMenu = document.querySelector('.home__menu__side');

btnMenu.addEventListener('click', () => {
    homeMenu.classList.toggle('home__box--show')
});

/* Close and open pop-up */
const btnsClose = document.querySelectorAll('.pop-up .btn-n');
const popUp = document.querySelector('.pop-up');

btnsClose.forEach((btnClose) => {
    btnClose.addEventListener('click', () => {
        popUp.style.display="none";
    })
});

const btnsBoxHome = document.querySelectorAll('.home__box__container__btn');
const contentBox = document.querySelector('.home__box__container__btn + .home__box__content')

btnsBoxHome.forEach((btnBoxHome) => {
    btnBoxHome.addEventListener('click', () => {
        contentBox.classList.toggle('home__box--show')
    })
});
