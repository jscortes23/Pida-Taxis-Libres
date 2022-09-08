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
const btnBoxHomePaymentMethods = document.querySelector('.home__box__container__btn[data-section="formaPago"]')
const contentBoxOrigin = document.querySelector('.home__box__container__btn[data-section="origen"] + .home__box__content');
const contentBoxDestiny = document.querySelector('.home__box__container__btn[data-section="destino"] + .home__box__content');
const contentBoxTypeTaxi = document.querySelector('.home__box__container__btn[data-section="tipoTaxi"] + .home__box__content');
const contentBoxPaymentMethods = document.querySelector('.home__box__container__btn[data-section="formaPago"] + .home__box__content');

function showSection(section) {
    section.classList.toggle('home__box--show')
}

if (allBtnsBoxHome) {
    btnBoxHomeOrigin.addEventListener('click', () => {showSection(contentBoxOrigin)});
    btnBoxHomeDestiny.addEventListener('click', () => {showSection(contentBoxDestiny)});
    btnBoxHomeTypeTaxi.addEventListener('click', () => {showSection(contentBoxTypeTaxi)});
    btnBoxHomePaymentMethods.addEventListener('click', () => {showSection(contentBoxPaymentMethods)});
}

/* Show my current location */
const contentHome = document.querySelector('.content__home');
const btnFixedLocationStrat = document.querySelector('.box__ubication__fixed[data-section="origen"]');
const btnFixedWithoutLocation = document.querySelector('.box__ubication__fixed:not([data-section="origen"])');
const btnBackHome = document.querySelectorAll('.btn-n-back');
const btnHere = document.querySelectorAll('.btn-n-dark');
const viewPickMeUpHere = document.querySelector('[data-screen="aqui-me-recoge"]');
const menuDropdown = document.querySelectorAll('.home__box__content');
const sectionsOrigin = document.querySelectorAll('.home__box__content[data-section="origen"] > .home__box--show');
const btnDropdownOrigin = document.querySelector('.home__box__container__btn[data-section="origen"]');
const btnCloseSetion = '<span class="icon icon-close"></span>';
const sectionMenuHome = document.querySelectorAll('.home__container__row');
const showOriginLocation = document.querySelector('.container__bottom-center[data-screen="aqui-me-recoge"] .btn-n-white');
const textOriginLocation = document.querySelectorAll('[data-section="origen"] .home__container__row .home__description');
const pointsMap = document.querySelectorAll('.point-map');

function backHome(view) {
    contentHome.classList.toggle('home__box--hidden');
    view.classList.toggle('home__box--hidden');
}

if (contentHome) {
    /* (Aqui me recoge) */
    btnFixedLocationStrat.addEventListener('click', () => {backHome(viewPickMeUpHere)});
    btnBackHome[0].addEventListener('click', () => {backHome(viewPickMeUpHere)});

    btnHere[0].addEventListener('click', () => {
        textOriginLocation[0].classList.toggle('home__box--hidden');
        textOriginLocation[1].classList.toggle('home__box--hidden');
        textOriginLocation[1].textContent = showOriginLocation.textContent;
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
const showDestinyLocation = document.querySelector('.container__bottom-center[data-screen="para-alla-voy"] .btn-n-white');
const textDestinyLocation = document.querySelectorAll('[data-section="destino"] .home__container__row .home__description');
const route = document.querySelector('.route')
const digitalVoucher = document.querySelector('.container__payment__methods .item-list-sm');

function showLocation(msg) {
    textDestinyLocation[0].classList.toggle('home__box--hidden');
    textDestinyLocation[1].classList.toggle('home__box--hidden');
    textDestinyLocation[1].textContent = msg;
    sectionMenuHome[1].insertAdjacentHTML('beforeend', btnCloseSetion);
    sectionsDestiny.classList.replace('home__box--show', 'home__box--hidden');
    menuDropdown[1].classList.add('home__box__container__btn');
    btnDropdownDestiny.classList.add('home__box--hidden');
}

if (contentHome) {
    /* (para alla voy) */
    btnFixedLocationEnd.addEventListener('click', () => {backHome(viewGoingThere)});
    btnBackHome[1].addEventListener('click', () => {backHome(viewGoingThere)});

    /* (Sin destino) */
    btnFixedWithoutLocation.addEventListener('click', () => {
        digitalVoucher.classList.toggle('home__box--hidden');
        pointsMap[0].classList.toggle('home__box--hidden');
        showLocation('Diré el destino al conductor');
    })

    btnHere[1].addEventListener('click', () => {
        showLocation(showDestinyLocation.textContent);
        if (textOriginLocation[0].value != '' & textDestinyLocation[0].value != '') {
            route.classList.toggle('home__box--hidden')
        }
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

const choosenCharacteristics = []
agreeCharacteristics.addEventListener('click', () => {
    containerCheckboxsCharacteristics.forEach( (checkbox) => {
        !checkbox.firstElementChild.checked ? checkbox.style.display = 'none' : checkbox.children[1].style.display = 'none';
        agreeCharacteristics.style.display = 'none';
        checkbox.style.cursor = 'text'
        if (checkbox.firstElementChild.checked) {
            choosenCharacteristics.push(checkbox)
        }
    });
});

/* Choosen payment methods */
const containerCheckboxsPaymenMethods = document.querySelectorAll('.container__payment__methods .container__btn-checkbox');
const agreePaymenMethods = document.querySelector('.container__payment__methods .home__box__content + .btn-n-primary-small');
const containerDataVoucher = document.querySelector('.container__payment__methods .home__box__content')
const enterVoucher = document.querySelector('.container__payment__methods .home__box__content .btn-n-primary-small')
const numberVoucher =  document.querySelector('.home__input[type="number"]')
const passwordVoucher =  document.querySelector('.home__input[type="password"]')


containerCheckboxsPaymenMethods.forEach( (checkbox) => {
    checkbox.addEventListener('click', () => {
        agreePaymenMethods.disabled = false
    })
})

agreePaymenMethods.addEventListener('click', () => {
    containerCheckboxsPaymenMethods.forEach( (checkbox) => {
        if (!checkbox.firstElementChild.checked) {
            checkbox.style.display = 'none'
        }
        if (containerCheckboxsPaymenMethods[0].firstElementChild.checked) {
            containerDataVoucher.classList.toggle('home__box--hidden')
        }
        agreePaymenMethods.classList.toggle('home__box--hidden')
        btnBoxHomePaymentMethods.classList.toggle('home__box--hidden')
    })
})

numberVoucher.addEventListener('input', () => {
    numberVoucher.value ? enterVoucher.disabled = false : enterVoucher.disabled = true
})

passwordVoucher.addEventListener('input', () => {
    passwordVoucher.value ? enterVoucher.disabled = false : enterVoucher.disabled = true
})

enterVoucher.addEventListener('click', () => {
    containerCheckboxsPaymenMethods[0].childNodes[6].textContent = `Vale Digital / ${numberVoucher.value}`
    containerDataVoucher.classList.toggle('home__box--hidden')
    // orderTaxi.disabled = false
})

/* detail of the request */
const containerDetailRequest = document.querySelector('.container-request')
const details = document.querySelectorAll('.detail-section > p:not(.fw-600)')
const detailsIcon = document.querySelectorAll('.detail-section > span')
const orderTaxi = document.querySelector('.btn-n-primary-small[type="submit"]')
const choosenPaymenMethod = document.querySelectorAll('.container__payment__methods .container__btn-checkbox');


const ForWhoOrderTaxi = document.querySelectorAll('input[name="eleccion"]')
const LabelForWhoOrderTaxi = document.querySelectorAll('label[class="home__btn"]')
orderTaxi.disabled = false
containerDetailRequest.style.display = 'none'

const detailCharacteristics = document.querySelector('.detail-section:nth-child(7)')

orderTaxi.addEventListener('click', () => {
    containerDetailRequest.style.display = 'flex'
    /* Taxi */
    ForWhoOrderTaxi.forEach( (who) => {
        if (who.checked) {
            who.id === 'para-mi' ? details[0].textContent = LabelForWhoOrderTaxi[0].textContent : details[0].textContent = LabelForWhoOrderTaxi[1].textContent
        }
    })
    /* Origin */
    details[2].textContent = textOriginLocation[0].value

    /* Destiny */
    details[3].textContent = textDestinyLocation[0].value

    /* Type of taxi */
    details[4].textContent = taxi.children[1].textContent
    detailsIcon[0].classList.add(taxi.children[0].classList[2])

    /* Payment methods */
    choosenPaymenMethod.forEach( (choosen) => {
        if (choosen.firstElementChild.checked) {
            details[5].textContent = choosen.innerText
            detailsIcon[1].classList.add(choosen.children[2].classList[2])
        }
    })

    /* characteristics of the taxi */
    choosenCharacteristics.forEach( (characteristics) => {
        const icon = characteristics.children[2].classList[2]
        const IconCharacteristics = `<span class="icon icon-sm-detail ${icon}"></span>`
        detailCharacteristics.insertAdjacentHTML('beforeend', IconCharacteristics)
    })

    /* Price */
    details[6].textContent = taxi.children[2].textContent
})

/* order another taxi */
const conatinerDriverAssigned = document.querySelector('.container__driver-assigned')
const btnOrderAnotherTaxi = document.querySelector('.container__driver-assigned .btn-n-lg')
const mainMenu = document.querySelector('.content__home')

btnOrderAnotherTaxi.addEventListener('click', () => {
    alert("SDASs")
})

/* show confirmed taxis */
const btnShowConfirmedTaxis = document.querySelector('.content__home .btn-n-taxi-go')
const containerOrderTaxis = document.querySelector('.container__confirmed-taxis')
const btnBack = document.querySelector('.container__confirmed-taxis .btn-n-primary-small')

btnShowConfirmedTaxis.addEventListener('click', () => {
    mainMenu.classList.toggle('home__box--hidden')
    containerOrderTaxis.classList.toggle('home__box--hidden')
})

btnBack.addEventListener('click', () => {
    mainMenu.classList.toggle('home__box--hidden')
    containerOrderTaxis.classList.toggle('home__box--hidden')
})