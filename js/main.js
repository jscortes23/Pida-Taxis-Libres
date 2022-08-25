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
    btnMenuOpen.addEventListener('click', () => {showSection(homeMenu)});
    
    btnMenuClose.addEventListener('click', () => {showSection(homeMenu)});
}

/* For continue the process */
const allBtnsBoxHome = document.querySelectorAll('.home__box__container__btn')
const btnBoxHomeOrigin = document.querySelector('.home__box__container__btn[data-section="origen"]');
const btnBoxHomeDestiny = document.querySelector('.home__box__container__btn[data-section="destino"]');
const btnBoxHomeTypeTaxi = document.querySelector('.home__box__container__btn[data-section="tipoTaxi"]');
const contentBoxOrigin = document.querySelector('.home__box__container__btn[data-section="origen"] + .home__box__content');
const contentBoxDestiny = document.querySelector('.home__box__container__btn[data-section="destino"] + .home__box__content');
const contentBoxTypeTaxi = document.querySelector('.home__box__container__btn[data-section="tipoTaxi"] + .home__box__content');

function showSection(section) {
    section.classList.toggle('home__box--show')
}

if (allBtnsBoxHome) {
    btnBoxHomeOrigin.addEventListener('click', () => {showSection(contentBoxOrigin)});
    btnBoxHomeDestiny.addEventListener('click', () => {showSection(contentBoxDestiny)});
    btnBoxHomeTypeTaxi.addEventListener('click', () => {showSection(contentBoxTypeTaxi)});
}

/* Show my current location */
const contentHome = document.querySelector('.content__home');
const btnFixedLocationStrat = document.querySelector('.box__ubication__fixed[data-section="origen"]');
const btnBackHome = document.querySelectorAll('.btn-n-back');
const btnHere = document.querySelectorAll('.btn-n-dark');
const viewPickMeUpHere = document.querySelector('[data-screen="aqui-me-recoge"]');
const menuDropdown = document.querySelectorAll('.home__box__content');
const sectionsOrigin = document.querySelectorAll('.home__box__content[data-section="origen"] > .home__box--show');
const btnDropdownOrigin = document.querySelector('.home__box__container__btn[data-section="origen"]');
const btnCloseSetion = '<span class="icon icon-close"></span>';
const sectionMenuHome = document.querySelectorAll('.home__container__row');

function backHome(view) {
    contentHome.classList.toggle('home__box--hidden');
    view.classList.toggle('home__box--hidden');
}

if (contentHome) {
    /* (Aqui me recoge) */
    btnFixedLocationStrat.addEventListener('click', () => {backHome(viewPickMeUpHere)});
    btnBackHome[0].addEventListener('click', () => {backHome(viewPickMeUpHere)});

    btnHere[0].addEventListener('click', () => {
        sectionMenuHome[0].insertAdjacentHTML('beforeend', btnCloseSetion);
        sectionsOrigin[1].classList.replace('home__box--show', 'home__box--hidden');
        menuDropdown[0].classList.add('home__box__container__btn');
        btnDropdownOrigin.classList.add('home__box--hidden');
        backHome(viewPickMeUpHere);
    });    
}

/* Show my current location */
const btnFixedLocationEnd = document.querySelector('.box__ubication[data-section="destino"]');
const viewGoingThere = document.querySelector('[data-screen="para-alla-voy"]');
const sectionsDestiny = document.querySelector('.home__box__content[data-section="destino"] > .home__box--show');
const btnDropdownDestiny = document.querySelector('.home__box__container__btn[data-section="destino"]');

if (contentHome) {
    /* (para alla voy) */
    btnFixedLocationEnd.addEventListener('click', () => {backHome(viewGoingThere)});
    btnBackHome[1].addEventListener('click', () => {backHome(viewGoingThere)});

    btnHere[1].addEventListener('click', () => {
        sectionMenuHome[1].insertAdjacentHTML('beforeend', btnCloseSetion);
        sectionsDestiny.classList.replace('home__box--show', 'home__box--hidden');
        menuDropdown[1].classList.add('home__box__container__btn');
        btnDropdownDestiny.classList.add('home__box--hidden');
        backHome(viewGoingThere);
    });  
}

/* Choose type of taxi */
const allTypeTaxis = document.querySelectorAll('.btn-n-type-taxi');
const sectionsTypeTaxi = document.querySelector('.home__box__content[data-section="tipoTaxi"]');
const showTaxiChosen = document.querySelector('.container__taxi__chosen');
const taxi = document.querySelector('.content__taxi__chosen');
const sectionCharacteristics = document.querySelector('.container__characteristics__taxi');

if (allTypeTaxis) {
    allTypeTaxis.forEach( (typeTaxi) => {
        typeTaxi.addEventListener('click', () => {
            btnBoxHomeTypeTaxi.classList.add('home__box--hidden');
            sectionsTypeTaxi.classList.replace('home__box--show', 'home__box--hidden');
            taxi.children[0].classList.add(typeTaxi.children[0].classList[2]);
            taxi.children[1].innerText = typeTaxi.children[1].textContent;
            taxi.children[2].innerText = typeTaxi.children[2].textContent;
            showTaxiChosen.classList.replace('home__box--hidden', 'home__box--show');
            sectionCharacteristics.classList.replace('home__box--hidden', 'home__box--show');
        })
    })
}

/* Choose characterstics of the taxi */
const containerCheckboxsCharacteristics = document.querySelectorAll('.container__characteristics__taxi .container__btn-checkbox');
const checkboxsCharacteristics = document.querySelectorAll('.container__characteristics__taxi input');
const agreeCharacteristics = document.querySelector('.container__characteristics__taxi .btn-n-primary-small');

var check = 0;
checkboxsCharacteristics.forEach( (checkbox) => {
    checkbox.addEventListener('click', () => {
        checkbox.checked ? check++ : check--;
        check > 0 ? agreeCharacteristics.disabled = false : agreeCharacteristics.disabled = true;
    })
});

agreeCharacteristics.addEventListener('click', () => {
    containerCheckboxsCharacteristics.forEach( (checkbox) => {
        !checkbox.firstElementChild.checked ? checkbox.style.display = 'none' : checkbox.children[1].style.display = 'none';
        agreeCharacteristics.style.display = 'none';
        checkbox.style.cursor = 'text'
    });
});

/* Choosen payment methods */
const btnPaymentMethods = document.querySelector('.home__box__container__btn[data-section="formaPago"]')
const containerPaymenMethods = document.querySelector('.container__payment__methods');
const containerCheckboxsPaymenMethods = document.querySelectorAll('.container__payment__methods .container__btn-checkbox');

btnPaymentMethods.addEventListener('click', () => {
    containerPaymenMethods.classList.toggle('home__box--hidden')
})

containerCheckboxsPaymenMethods.forEach( (checkbox) => {
    checkbox.addEventListener('click', () => {
    })
})


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