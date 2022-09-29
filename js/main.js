const $ = (element) => document.querySelector(element);

/* Close and open pop-up */
const btnsClose = document.querySelectorAll('.pop-up .btn-n');
const popUp = $('.pop-up');

btnsClose.forEach((btnClose) => {
    btnClose.addEventListener('click', () => {
        popUp.style.display="none";
    })
});

/* Continue with login  */
const btnNextLogin = $('.login__part-one > .btn-n-primary');
const btnBackLogin = $('.login__part-two > .btn-n-secondary');
const partOneLogin = $('.login__part-one');
const partTwoLogin = $('.login__part-two');

if (partOneLogin && partTwoLogin) {
    btnNextLogin.addEventListener('click' , () => {
        partOneLogin.style.display = 'none'
        partTwoLogin.style.display = 'flex'
    });
    
    btnBackLogin.addEventListener('click' , () => {
        partOneLogin.style.display = 'flex'
        partTwoLogin.style.display = 'none'
    });    
}

/* Show password */
const btnShowPassword = $('.icon-eye');
const btnHiddenPassword = $('.icon-eye-block');
const fieldPassword = $('.login__input[type="password"]');

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
const btnMenuOpen = $('.btn-n-menu');
const btnMenuClose = $('.btn-n-menu__close');
const homeMenu = $('.home__menu__side');

if (btnMenuOpen && btnMenuClose) {
    btnMenuOpen.addEventListener('click', () => {homeMenu.style.transform = 'translateX(0)'});
    btnMenuClose.addEventListener('click', () => {homeMenu.style.transform = 'translateX(2000%)'});
}

/* Open and close options of the menu */
const btnsDropdown = document.querySelectorAll(".home__box__container__btn");
const optionsMenu = document.querySelectorAll(".home__box__content");

function hideAllMenus(btnPressed) {
  const allMenu = document.querySelectorAll(
    ".home__box__container__btn[data-section] + .home__box__content"
  );
  console.log(allMenu);
  const menuActive = $(
    `.home__box__container__btn[data-section="${btnPressed}"]`
  );
  allMenu.forEach((menu) => {
    if (btnPressed) {
      menu.classList.add("home__box--hidden");
    }
  });
}

function stateBtns(btnMenu, btnPressed) {
  btnMenu.forEach((btn) => {
    const optionMenu = $(
      `.home__box__container__btn[data-section="${btnPressed}"] + .home__box__content`
    );
    if (btnPressed === btn.dataset.section) {
      optionMenu.classList.toggle("home__box--hidden");
      optionMenu.classList.toggle("home__box__content--open");
      if (!["tipoTaxi", "formaPago"].includes(btnPressed)) {
        var iconArrow = btn.children[1].children[1];
        iconArrow.classList.toggle("icon--rotate-90");
      }
    } else {
      try {
        btn.children[1].children[1].classList.remove("icon--rotate-90");
      } catch (error) {
        console.log(error);
      }
    }
  });
}

const btnCloseMenu = document.querySelectorAll('.home__container__row .icon.icon-close')


btnsDropdown.forEach((btn) => {
  btn.addEventListener("mouseup", () => {
    let btnPressed = btn.dataset.section;
    // hideAllMenus();
    stateBtns(btnsDropdown, btnPressed);
  });
});

// const allBtnsBoxHome = document.querySelectorAll('.home__box__container__btn')
/* const contentBoxes = document.querySelectorAll('.home__box__container__btn[data-section] + .home__box__content');

function showSection(section) {
    section.classList.toggle('home__box--show')
}

function hiddenSection() {
    contentBoxes.forEach( (contentBox) => {
        contentBox.classList.replace('home__box--show','home__box--hidden')
    })
}

if (allBtnsBoxHome) {
    allBtnsBoxHome.forEach( (btnHome) => {
        btnHome.addEventListener('click', () => {
            hiddenSection()
            btnHome.firstElementChild.checked = 'true'
            allBtnsBoxHome.forEach((btnHome) => {
                if (btnHome.firstElementChild.checked) {
                    const contentBox = $(`.home__box__container__btn[data-section="${btnHome.htmlFor}"] + .home__box__content`)
                    showSection(contentBox)
                }
            })
        })
    })
} */

/* Show my current location */
const contentHome = $('.content__home');
const btnFixedLocationStrat = $('.box__ubication__fixed[data-section="origen"]');
const btnFixedWithoutLocation = $('.box__ubication__fixed:not([data-section="origen"])');
const btnBackHome = document.querySelectorAll('.btn-n-back');
const btnHere = document.querySelectorAll('.btn-n-dark');
const viewPickMeUpHere = $('[data-screen="aqui-me-recoge"]');
const menuDropdown = document.querySelectorAll('.home__box__content');
const sectionsOrigin = document.querySelectorAll('.home__box__content[data-section="origen"] > .home__box--show');
const btnDropdownOrigin = $('.home__box__container__btn[data-section="origen"]');
const sectionMenuHome = document.querySelectorAll('.home__container__row');
const showOriginLocation = $('.container__bottom-center[data-screen="aqui-me-recoge"] .btn-n-white');
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
        textOriginLocation[0].classList.add('home__box--hidden');
        textOriginLocation[1].classList.toggle('home__box--hidden');
        textOriginLocation[1].textContent = showOriginLocation.textContent;
        sectionMenuHome[0].children[3].classList.remove('home__box--hidden')
        sectionMenuHome[0].children[3].addEventListener('click', () => {
            sectionMenuHome[0].children[2].classList.add('home__box--hidden')
            sectionMenuHome[0].children[3].classList.add('home__box--hidden')
            sectionMenuHome[0].children[3].classList.add('home__box--hidden')
            textOriginLocation[0].classList.remove('home__box--hidden');
            btnDropdownOrigin.classList.remove('home__box--hidden');
            sectionsOrigin[1].classList.replace('home__box--hidden', 'home__box--show');
            menuDropdown[0].classList.remove('home__box__container__btn');
        })
        sectionsOrigin[1].classList.replace('home__box--show', 'home__box--hidden');
        menuDropdown[0].classList.add('home__box__container__btn');
        btnDropdownOrigin.classList.add('home__box--hidden');
        backHome(viewPickMeUpHere);
    });    
}

/* Show my current location */
const btnFixedLocationEnd = $('.box__ubication[data-section="destino"]');
const viewGoingThere = $('[data-screen="para-alla-voy"]');
const sectionsDestiny = $('.home__box__content[data-section="destino"] > .home__box--show');
const btnDropdownDestiny = $('.home__box__container__btn[data-section="destino"]');
const showDestinyLocation = $('.container__bottom-center[data-screen="para-alla-voy"] .btn-n-white');
const textDestinyLocation = document.querySelectorAll('[data-section="destino"] .home__container__row .home__description');
const route = $('.route')
const digitalVoucher = $('.container__payment__methods .item-list-sm');

function showLocation(msg) {
    textDestinyLocation[0].classList.toggle('home__box--hidden');
    textDestinyLocation[1].classList.toggle('home__box--hidden');
    textDestinyLocation[1].textContent = msg;
    sectionMenuHome[1].children[3].classList.remove('home__box--hidden')
    sectionMenuHome[1].children[3].addEventListener('click', () => {
        
        sectionMenuHome[1].children[3].classList.add('home__box--hidden')
        textDestinyLocation[0].classList.remove('home__box--hidden');
        textDestinyLocation[1].classList.add('home__box--hidden');    
        menuDropdown[1].classList.toggle('home__box__container__btn');
        sectionsDestiny.classList.replace('home__box--hidden', 'home__box--show');
        btnDropdownDestiny.classList.toggle('home__box--hidden');
    })
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
const sectionsTypeTaxi = $('.home__box__content[data-section="tipoTaxi"]');
const showTaxiChosen = $('.container__taxi__chosen');
const taxi = $('.content__taxi__chosen');
const sectionCharacteristics = $('.container__characteristics__taxi');
const btnBoxHomeTypeTaxi = $('.home__box__container__btn[data-section="tipoTaxi"]');
const btnCloseTaxiChosen = $('.container__taxi__chosen .icon.icon-close');

if (allTypeTaxis) {
    allTypeTaxis.forEach( (typeTaxi) => {
        typeTaxi.addEventListener('click', () => {
            btnBoxHomeTypeTaxi.classList.add('home__box--hidden');
            sectionsTypeTaxi.classList.add('home__box--hidden');
            taxi.children[0].classList.add(typeTaxi.children[0].classList[2]);
            taxi.children[1].innerText = typeTaxi.children[1].textContent;
            taxi.children[2].innerText = typeTaxi.children[2].textContent;
            showTaxiChosen.classList.replace('home__box--hidden', 'home__box--show');
            sectionCharacteristics.classList.replace('home__box--hidden', 'home__box--show');
        })
    })
    btnCloseTaxiChosen.addEventListener('click', () => {
        btnBoxHomeTypeTaxi.classList.remove('home__box--hidden');
        sectionsTypeTaxi.classList.remove('home__box--hidden');
        taxi.children[0].classList.remove(taxi.firstElementChild.classList[2]);
        showTaxiChosen.classList.replace('home__box--show', 'home__box--hidden');
        sectionCharacteristics.classList.replace('home__box--show', 'home__box--hidden');
    })
}

/* Select preferences */
const preference = $('.characteristics__taxi__select')
const menuDropdownpreference = $('.characteristics__taxi__container-select')
const containerOption = $('.container-selected-option')
const choosenCharacteristics = []

menuDropdownpreference.addEventListener('mousedown', () => {
    menuDropdownpreference.firstElementChild.classList.add('icon--rotate-90')
})

preference.addEventListener('change', () => {
    menuDropdownpreference.firstElementChild.classList.remove('icon--rotate-90')
    if (preference.selectedIndex) {
        const selectedOption = preference.options[preference.selectedIndex];
        const optionExist = document.getElementById(selectedOption.textContent)
        if (!optionExist) {
            const option = document.createElement('div')
            option.id = selectedOption.textContent
            option.classList.add('selected-option')
            option.appendChild(document.createElement('p')).textContent = selectedOption.textContent
            option.appendChild(document.createElement('span')).classList.add('icon', 'icon-close', 'icon-sm-close')
            choosenCharacteristics.push(selectedOption.textContent)
            containerOption.insertAdjacentElement('beforeend', option)
            option.lastChild.addEventListener('click', () => {
                containerOption.removeChild(option)
            })
        }
    }
})

/* Choose characterstics of the taxi */
/* ********************************* */
/* En caso de usar checkbox          */
/* ********************************* */
const containerCheckboxsCharacteristics = document.querySelectorAll('.container__characteristics__taxi .container__btn-checkbox');
const checkboxsCharacteristics = document.querySelectorAll('.container__characteristics__taxi input');
const agreeCharacteristics = $('.container__characteristics__taxi .btn-n-primary-small');

var check = 0;
checkboxsCharacteristics.forEach( (checkbox) => {
    checkbox.addEventListener('click', () => {
        checkbox.checked ? check++ : check--;
        check > 0 ? agreeCharacteristics.disabled = false : agreeCharacteristics.disabled = true;
    })
});

agreeCharacteristics.addEventListener('click', () => {
    sectionCharacteristics.classList.replace('home__box--show', 'home__box--hidden')
    /* containerCheckboxsCharacteristics.forEach( (checkbox) => {
        !checkbox.firstElementChild.checked ? checkbox.style.display = 'none' : checkbox.children[1].style.display = 'none';
        agreeCharacteristics.style.display = 'none';
        checkbox.style.cursor = 'text'
        if (checkbox.firstElementChild.checked) {
            choosenCharacteristics.push(checkbox)
        }
    }); */
});

/* Choosen payment methods */
const containerCheckboxsPaymenMethods = document.querySelectorAll('.container__payment__methods .container__btn-checkbox');
const agreePaymenMethods = $('.container__payment__methods .home__box__content + .btn-n-primary-small');
const containerDataVoucher = $('.container__payment__methods .home__box__content')
const enterVoucher = $('.container__payment__methods .home__box__content .btn-n-primary-small')
const numberVoucher =  $('.home__input[type="number"]')
const passwordVoucher =  $('.home__input[type="password"]')


containerCheckboxsPaymenMethods.forEach( (checkbox) => {
    checkbox.addEventListener('click', () => {
        agreePaymenMethods.disabled = false
    })
})
// home__box__content--open
agreePaymenMethods.addEventListener('click', () => {
    containerDataVoucher.classList.add('home__box__content--open')
    containerCheckboxsPaymenMethods.forEach( (checkbox) => {
        if (!checkbox.firstElementChild.checked) {
            checkbox.style.display = 'none'
        }
        if (containerCheckboxsPaymenMethods[0].firstElementChild.checked) {
            containerDataVoucher.classList.toggle('home__box--hidden')
        }
        agreePaymenMethods.classList.toggle('home__box--hidden')
        // btnBoxHomePaymentMethods.classList.toggle('home__box--hidden')
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
const containerDetailRequest = $('.container-request')
const details = document.querySelectorAll('.detail-section > p:not(.fw-600)')
const detailsIcon = document.querySelectorAll('.detail-section > span')
const orderTaxi = $('.btn-n-primary-small[type="submit"]')
const choosenPaymenMethod = document.querySelectorAll('.container__payment__methods .container__btn-checkbox');


const ForWhoOrderTaxi = document.querySelectorAll('input[name="eleccion"]')
const LabelForWhoOrderTaxi = document.querySelectorAll('label[class="home__btn"]')
orderTaxi.disabled = false
containerDetailRequest.style.display = 'none'

const detailCharacteristics = $('.detail-section:nth-child(7)')

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
    /* With checkbox */
    choosenCharacteristics.forEach( (characteristics) => {
        // const icon = characteristics.children[2].classList[2]
        const IconCharacteristics = `<p class="fs-18">${characteristics}</p>`
        detailCharacteristics.insertAdjacentHTML('beforeend', IconCharacteristics)
    })

    /* Price */
    details[6].textContent = taxi.children[2].textContent
})

/* order another taxi */
const conatinerDriverAssigned = $('.container__driver-assigned')
const btnOrderAnotherTaxi = $('.container__driver-assigned .btn-n-lg')
const mainMenu = $('.content__home')

btnOrderAnotherTaxi.addEventListener('click', () => {
    alert("SDASs")
})

/* show confirmed taxis */
const btnShowConfirmedTaxis = $('.content__home .btn-n-taxi-go')
const containerOrderTaxis = $('.container__confirmed-taxis')
const btnBack = $('.container__confirmed-taxis .btn-n-primary-small')

btnShowConfirmedTaxis.addEventListener('click', () => {
    mainMenu.classList.toggle('home__box--hidden')
    containerOrderTaxis.classList.toggle('home__box--hidden')
})

btnBack.addEventListener('click', () => {
    mainMenu.classList.toggle('home__box--hidden')
    containerOrderTaxis.classList.toggle('home__box--hidden')
})



