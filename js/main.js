/* Close and open pop-up */
const btnsClose = document.querySelectorAll('.pop-up .btn-n');
const popUp = document.querySelector('.pop-up');

btnsClose.forEach((btnClose) => {
    btnClose.addEventListener('click', () => {
        popUp.style.display="none";
    })
});

/* Continue with login  */
const btnNextLogin = document.querySelector('.login__part-one > .btn-n-primary');
const btnBackLogin = document.querySelector('.login__part-two > .btn-n-secondary');
const partOneLogin = document.querySelector('.login__part-one');
const partTwoLogin = document.querySelector('.login__part-two');

if (partOneLogin && partTwoLogin) {
    btnNextLogin.addEventListener('click' , () => {
        partOneLogin.style.display = "none";
        partTwoLogin.style.display = "initial";
    });
    
    btnBackLogin.addEventListener('click' , () => {
        partOneLogin.style.display = "initial";
        partTwoLogin.style.display = "none";
    });    
}

/* Show password */
const btnShowPassword = document.querySelector('.icon-eye');
const btnHiddenPassword = document.querySelector('.icon-eye-block');
const fieldPassword = document.querySelector('.login__input[type="password"]');

if (btnShowPassword && btnHiddenPassword) {
    btnShowPassword.addEventListener('click', () => {
        fieldPassword.type = "text"
        btnShowPassword.style.display = "none"
        btnHiddenPassword.style.display = "block"
    });
    
    btnHiddenPassword.addEventListener('click', () => {
        fieldPassword.type = "password"
        btnHiddenPassword.style.display = "none"
        btnShowPassword.style.display = "block"
    });
}

/* Close and open menu*/
const btnMenuOpen = document.querySelector('.btn-n-menu');
const btnMenuClose = document.querySelector('.btn-n-menu__close');
const homeMenu = document.querySelector('.home__menu__side');

if (btnMenuOpen && btnMenuClose) {
    btnMenuOpen.addEventListener('click', () => {
        homeMenu.classList.add('home__box--show')
    });
    
    btnMenuClose.addEventListener('click', () => {
        homeMenu.classList.remove('home__box--show');
    });
}

/* For continue the process */
const btnsBoxHome = document.querySelectorAll('.home__box__container__btn');
const contentBox = document.querySelector('.home__box__container__btn + .home__box__content');

if (btnsBoxHome) {
    btnsBoxHome.forEach((btnBoxHome) => {
        btnBoxHome.addEventListener('click', () => {
            contentBox.classList.toggle('home__box--show')
        })
    });
}

/* Show my current location */
const contentHome = document.querySelector('.content__home');
const btnFixedLocation = document.querySelector('.box__ubication__fixed');
const btnBackHome = document.querySelector('.container__current-location > .icon-right-arrow')
const viewCurrentLocation = document.querySelector('.container__current-location');

if (contentHome) {
    btnFixedLocation.addEventListener('click', () => {
        contentHome.classList.toggle('home__box--hidden')
        viewCurrentLocation.classList.toggle('home__box--hidden')
    });

    btnBackHome.addEventListener('click', () => {
        contentHome.classList.toggle('home__box--hidden')
        viewCurrentLocation.classList.toggle('home__box--hidden')
    })
}


/* const btnsBoxHome = document.querySelectorAll('.home__box__container__btn');
const inputsSectionMenu = document.querySelectorAll('.home__input-radio[name=seccion]');

function checkActiveSection(input) {
    if (input.checked) {
        alert("asdas")
    }
}

btnsBoxHome.forEach( (btnBoxHome) => {
    btnBoxHome.addEventListener('click', checkActiveSection())
}); */