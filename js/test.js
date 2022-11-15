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
const homeMenuSide = $('.home__menu__side');

if (btnMenuOpen && btnMenuClose) {
  btnMenuOpen.addEventListener('click', () => {homeMenuSide.style.transform = 'translateX(0)'});
  btnMenuClose.addEventListener('click', () => {
    homeMenuSide.style.transform = 'translateX(110vw)'
    listMenuSide.classList.remove('home__box--hidden')
    profileMenuSide.classList.replace('home__box--show', 'home__box--hidden')
    tripsMenuSide.classList.replace('home__box--show', 'home__box--hidden')
    resumeTripMenuSide.classList.replace('home__box--show', 'home__box--hidden')  
  });
}

/*****************************************************/
/*          Functions menu side                      */
/*****************************************************/
const btnsMenuSide = document.querySelectorAll('.btn-n-menu__side')
const listMenuSide = $('.home__menu__side__list')
const profileMenuSide = $('.container-profile')
const tripsMenuSide = $('.container-done-trips')
const exitProfileMenu = $('.container-profile > .btn-n:first-child')
const exitTripsMenu = $('.container-done-trips > .btn-n')
const nameProfile = $('.home__menu__side__title')


function hiddenMenuSide() {
  btnMenuClose.textContent = '';
  listMenuSide.classList.add('home__box--hidden')
  nameProfile.classList.add('home__box--hidden')
}

function showMenuSide() {
  btnMenuClose.textContent = 'X';
  listMenuSide.classList.remove('home__box--hidden')
  nameProfile.classList.remove('home__box--hidden')
}
 
// Profile
btnsMenuSide[0].addEventListener('click', () => {
  hiddenMenuSide()
  profileMenuSide.classList.replace('home__box--hidden', 'home__box--show')
})

exitProfileMenu.addEventListener('click', () => {
  showMenuSide()
  profileMenuSide.classList.replace('home__box--show', 'home__box--hidden')
})
 
// Trips
btnsMenuSide[1].addEventListener('click', () => {
  hiddenMenuSide()
  tripsMenuSide.classList.replace('home__box--hidden', 'home__box--show')
})

exitTripsMenu.addEventListener('click', () => {
  showMenuSide()
  tripsMenuSide.classList.replace('home__box--show', 'home__box--hidden')
})
 
// resume trip
const doneTrip = document.querySelectorAll('.content-done-trip')
const resumeTripMenuSide = $('.container-resume-trip')
const exitResumtripMenu = $('.container-resume-trip .btn-n')
const resumeTripContent = $('.container-resume-trip .container-done-trips--scroll.scroll-size')

function showContentResumeTrip(trip) {
  let priceTrip = trip.children[4].children[0].textContent
  let dateTrip = trip.children[0].textContent
  let originTrip = trip.children[2].textContent
  let destinyTrip = trip.children[3].textContent
  let methodPayment = trip.children[4].children[1].textContent
  // Date
  resumeTripContent.children[0].children[0].textContent = dateTrip

  // Origin
  resumeTripContent.children[0].children[2].textContent = originTrip 

  // Destiny
  resumeTripContent.children[0].children[4].textContent = destinyTrip

  // Price
  resumeTripContent.children[2].children[1].children[7].textContent = priceTrip 
  resumeTripContent.children[2].children[1].children[1].textContent = priceTrip 
  resumeTripContent.lastElementChild.lastElementChild.textContent = priceTrip

  // Method payment
  resumeTripContent.children[4].textContent = methodPayment
}

doneTrip.forEach( (trip) => {
  trip.addEventListener('click', () => {
    showContentResumeTrip(trip)
    tripsMenuSide.classList.replace('home__box--show', 'home__box--hidden')
    resumeTripMenuSide.classList.replace('home__box--hidden', 'home__box--show')
  })
})

exitResumtripMenu.addEventListener('click', () => {
  tripsMenuSide.classList.replace('home__box--hidden','home__box--show')
  resumeTripMenuSide.classList.replace('home__box--show', 'home__box--hidden')
})


/*****************************************************/
/*          Origin and destiny                       */
/*****************************************************/
const contentHome = $('.content__home');
const menuOrigin = $('.home__box__content[data-section="origen"]')
const menuDestiny = $('.home__box__content[data-section="destino"]')
const viewHerePickUp = $('.container__bottom-center[data-screen="aqui-me-recoge"]')
const viewHereLeave = $('.container__bottom-center[data-screen="para-alla-voy"]')
const ubicationsSuggestiedOrigin = document.querySelectorAll('[data-section="origen"] .ubication__suggestied');
const ubicationsSuggestiedDestiny = document.querySelectorAll('[data-section="destino"] .ubication__suggestied');
const btnUbicationFixedOrigin = $('.box__ubication__fixed[data-section="origen"]')
const btnUbicationFixedDestiny = $('.box__ubication.box__text__sm[data-section="destino"]')
const btnUbicationFixedDestinyBlue = $('.box__ubication__fixed[data-section="destino"]')
const btnIndicateLaterDestiny = $('.container__bottom-center[data-screen="para-alla-voy"] .btn-n-ligth-blue')
const btnsBackMenu = document.querySelectorAll('.container__bottom-center .btn-n-back')
const btnHerePickUp = $('.container__bottom-center[data-screen="aqui-me-recoge"] .btn-n-dark')
const btnHereLeave = $('.container__bottom-center[data-screen="para-alla-voy"] .btn-n-dark')
const addressOrigin = $('.home__box__container__chosen[data-section="origen"]')
const addressDestiny = $('.home__box__container__chosen[data-section="destino"]')
const pointOrigin = $('.point-map')
const routeTrip = $('.route')
let destiny = ''
let origin = ''

function resetOptionMenuHome() {
  const opntionsMenuHome = document.querySelectorAll('input[name="seccion"]')
  opntionsMenuHome.forEach( (option) => {
    if (option.checked) {
      const optionActive = $('input[name="seccion"]:checked + label')
      optionActive.style.display = "none"
    }
    option.checked = false
  })
}

function showPointMap(address, viewCurrent, point) {
  const showAddress = $(`.container__bottom-center[data-screen="${point}"] .btn-n-white`)
  let locationGPS = ''
  contentHome.classList.add('home__box--hidden')
  viewCurrent.classList.remove('home__box--hidden')
  if (point === 'aqui-me-recoge') {
    locationGPS = 'Kr 70 B # 80 - 20'
  } else {
    locationGPS = 'Salitre magico'
  }
  showAddress.textContent = address || locationGPS
}

function hiddenPiontMap(menuCurrent, viewCurrent) {
  contentHome.classList.remove('home__box--hidden')
  viewCurrent.classList.add('home__box--hidden')
  menuCurrent.classList.add('home__box--hidden')
}

function backHome(viewCurrent) {
  contentHome.classList.remove('home__box--hidden');
  viewCurrent.classList.add('home__box--hidden');
}

function returnChoose(menuCurrent, containerAddress) {
  containerAddress.classList.add('home__box--hidden');
  menuCurrent.classList.remove('home__box--hidden');
}

function returnMenuHome(section) {
  let menuActive = $(`.home__box__input-radio#${section}`);
  let btnMenuActive = $(`.home__box__input-radio#${section} + label`);
  btnMenuActive.style.display = '';
  menuActive.checked = true;
}

function showAddressChosen(point, containerAddress, text) {
  let showAddress = $(`.container__bottom-center[data-screen="${point}"] .btn-n-white`).textContent
  if (text !== undefined) {
    showAddress = text
  }
  containerAddress.children[1].children[1].textContent = showAddress
  containerAddress.classList.remove('home__box--hidden')
  return showAddress
}

function showRouteTrip(origin, destiny) {
  if (origin != '' & destiny != '') {
    routeTrip.classList.remove('home__box--hidden')
  }
}

btnsBackMenu[0].addEventListener('click', () => {backHome(viewHerePickUp)})
btnsBackMenu[1].addEventListener('click', () => {backHome(viewHereLeave)})

ubicationsSuggestiedOrigin.forEach( (ubication) => {
  ubication.addEventListener('click', (e) => {
    let address = e.target.textContent
    showPointMap(address, viewHerePickUp, 'aqui-me-recoge')
  })
});

ubicationsSuggestiedDestiny.forEach( (ubication) => {
  ubication.addEventListener('click', (e) => {
    let address = e.target.textContent
    showPointMap(address, viewHereLeave, 'para-alla-voy')
  })
})

btnUbicationFixedOrigin.addEventListener('click', () => {
  showPointMap(null, viewHerePickUp, 'aqui-me-recoge')
})

btnUbicationFixedDestiny.addEventListener('click', () => {
  showPointMap(null, viewHereLeave, 'para-alla-voy')
})

btnHerePickUp.addEventListener('click', () => {
  hiddenPiontMap(menuOrigin, viewHerePickUp)
  resetOptionMenuHome()
  origin = showAddressChosen('aqui-me-recoge', addressOrigin)
  validateAllFieldMenu()
  const deleteAddressOrigin = addressOrigin.children[1].children[2]
  deleteAddressOrigin.addEventListener('click', () => {
    returnChoose(menuOrigin, addressOrigin);
    returnMenuHome('origen')
  })
})

btnHereLeave.addEventListener('click', () => {
  hiddenPiontMap(menuOrigin, viewHereLeave)
  resetOptionMenuHome()
  destiny = showAddressChosen('para-alla-voy', addressDestiny)
  showRouteTrip(origin, destiny)
  validateAllFieldMenu()
})

const deleteAddressDestiny = addressDestiny.children[1].children[2]
deleteAddressDestiny.addEventListener('click', () => {
  returnChoose(menuDestiny, addressDestiny);
  returnMenuHome('destino')
  routeTrip.classList.add('home__box--hidden')
  pointOrigin.classList.add('home__box--hidden')
})

btnUbicationFixedDestinyBlue.addEventListener('click' , () => {
  resetOptionMenuHome()
  destiny = showAddressChosen('para-alla-voy', addressDestiny, 'Diré el destino al conductor')
  pointOrigin.classList.remove('home__box--hidden')
})

btnIndicateLaterDestiny.addEventListener('click' , () => {
  hiddenPiontMap(menuOrigin, viewHereLeave)
  resetOptionMenuHome()
  destiny = showAddressChosen('para-alla-voy', addressDestiny, 'Diré el destino al conductor')
  pointOrigin.classList.remove('home__box--hidden')
  validateAllFieldMenu()
})

/*****************************************************/
/*          Type of taxis                            */
/*****************************************************/
const containerTaxiChosen = $('.container__taxi__chosen');
const typeTaxiChosen = $('.content__taxi__chosen');
const sectionTypeTaxi = $('.home__box__content[data-section="tipoTaxi"]');
const btnsTypeTaxi = document.querySelectorAll('.btn-n-type-taxi');
const btnDeleteTaxiChosen = $('.container__taxi__chosen .icon.icon-close');
const sectionCharacteristics = $('.container__characteristics__taxi');
const btnOrderTaxi = $('input[value="Pedir taxi"]')
let chosenTaxi

function deleteTaxiChosen() {
  const btnMethodPayment = $('label[for="formaPago"]')
  btnMethodPayment.classList.remove('home__box--hidden');
  btnOrderTaxi.classList.remove('home__box--hidden');
  typeTaxiChosen.children[0].classList.remove(typeTaxiChosen.children[0].classList[2]);
  sectionTypeTaxi.classList.remove('home__box--hidden');
  containerTaxiChosen.classList.add('home__box--hidden');
  sectionCharacteristics.classList.add('home__box--hidden');
}

btnsTypeTaxi.forEach( (btn) => {
  btn.addEventListener('click', () => {
    resetOptionMenuHome()
    const btnMethodPayment = $('label[for="formaPago"]')
    sectionTypeTaxi.classList.add('home__box--hidden');
    btnMethodPayment.classList.add('home__box--hidden');
    btnOrderTaxi.classList.add('home__box--hidden');
    typeTaxiChosen.children[0].classList.add(btn.children[0].classList[2]);
    typeTaxiChosen.children[1].innerText = btn.children[1].textContent;
    typeTaxiChosen.children[2].innerText = btn.children[2].textContent;
    containerTaxiChosen.classList.remove('home__box--hidden');
    sectionCharacteristics.classList.remove('home__box--hidden');
  })
})

btnDeleteTaxiChosen.addEventListener('click', () => {
  deleteTaxiChosen()
  removeAllPreferences()
  returnMenuHome('tipoTaxi')
})

/*****************************************************/
/*          Select preferences                       */
/*****************************************************/
const preference = $('.characteristics__taxi__select')
const menuDropdownpreference = $('.characteristics__taxi__container-select')
const containerOption = $('.container-selected-option')
const btnDeleteAllPreferences = $('.home__title__md > .icon-close')
const chosenCharacteristics = new Set()

function removeAllPreferences() {
  const options = [...containerOption.children]
  options.forEach( (option) => {
    option.remove()
  })
  chosenCharacteristics.forEach( (characteristics) => {
    chosenCharacteristics.delete(characteristics)
  })
  sectionCharacteristics.children[1].classList.remove('home__box--hidden')
  sectionCharacteristics.children[3].classList.remove('home__box--hidden')
}

function controlListPreferences(text) {
  menuDropdownpreference.firstElementChild.classList.remove('icon--rotate-90')
  if (preference.selectedIndex || text !== undefined) {
    const selectedOption = preference.options[preference.selectedIndex];
    const optionExist = document.getElementById(selectedOption.textContent)
    if (!optionExist) {
      const option = document.createElement('div')
      option.id = selectedOption.textContent
      option.classList.add('selected-option')
      option.appendChild(document.createElement('p')).textContent = text ?? selectedOption.textContent
      option.appendChild(document.createElement('span')).classList.add('icon', 'icon-close', 'icon-sm-close')
      chosenCharacteristics.add(text ?? selectedOption.textContent)
      containerOption.insertAdjacentElement('beforeend', option)
      option.lastChild.addEventListener('click', () => {
        containerOption.removeChild(option)
        chosenCharacteristics.delete(selectedOption.textContent)
        if (containerOption.children.length <= 0) {
          removeAllPreferences()
        }
      })
    }
  }
}

menuDropdownpreference.addEventListener('mousedown', () => {
  menuDropdownpreference.firstElementChild.classList.add('icon--rotate-90')
})

preference.addEventListener('change', () => {
  controlListPreferences()
})

btnDeleteAllPreferences.addEventListener('click', () => {
  removeAllPreferences()
})

/*****************************************************/
/*          Select method payment                    */
/*****************************************************/
const btnAgreeCharacteristics = $('.container__characteristics__taxi .btn-n-primary-small');
const containerPaymentMethods = $('.container__payment__methods');

btnAgreeCharacteristics.addEventListener('click', () => {
  if (chosenCharacteristics.size === 0) {
    controlListPreferences('No seleccionadas')
  }
  const checkMethodPayment = $('input#formaPago')
  checkMethodPayment.disabled = false
  checkMethodPayment.checked = true
  sectionCharacteristics.children[1].classList.add('home__box--hidden')
  sectionCharacteristics.children[3].classList.add('home__box--hidden')
  containerPaymentMethods.classList.remove('home__box--hidden')
});

/*****************************************************/
/*          Chosen payment methods                   */
/*****************************************************/
const containerCheckboxsPaymentMethods = document.querySelectorAll('.container__payment__methods .container__btn-checkbox');
const agreePaymentMethods = $('.container__payment__methods .home__box__content + .btn-n-primary-small');
const containerDigitalVoucher = $('.container__payment__methods .container-digital-voucher')
const btnEnterVoucher = $('.container__payment__methods .container-digital-voucher .btn-n-primary-small')
const containerCheckboxPaymentMethods = $('.container__payment__methods .list');
let chosenPaymentMethod

function hiddenCheckbox() {
  containerCheckboxsPaymentMethods.forEach( (checkbox) => {
    const checked = $('.container__payment__methods .checkbox:checked')
    if (checked != null && !checkbox.firstElementChild.checked) {
      checkbox.style.display = 'none'
    } else {
      checkbox.style.display = 'grid'
      chosenPaymentMethod = checkbox
      btnOrderTaxi.classList.remove('home__box--hidden')
    }
    if (containerCheckboxsPaymentMethods[0].firstElementChild.checked) {
      containerDigitalVoucher.classList.remove('home__box--hidden')
      btnOrderTaxi.classList.add('home__box--hidden')
    } else {
      containerDigitalVoucher.classList.add('home__box--hidden')
    }
    if (checked === null) {
      btnOrderTaxi.classList.add('home__box--hidden')
    }
  })
  return chosenPaymentMethod
}

function validateDigitalVoucher(containerDigitalVoucher) {
  let numberVoucher = containerDigitalVoucher.children[0].children.voucherNumber
  let passwordVoucher = containerDigitalVoucher.children[1].children.voucherPassword
  if (numberVoucher.value && passwordVoucher.value != '') {
    btnEnterVoucher.disabled = false
  } else {
    btnEnterVoucher.disabled = true
  }
}

containerCheckboxPaymentMethods.addEventListener('click', () => {
  chosenPaymentMethod = hiddenCheckbox()
})

containerDigitalVoucher.addEventListener('keyup', () => {
  validateDigitalVoucher(containerDigitalVoucher)
})

btnEnterVoucher.addEventListener('click', () => {
  let numberVoucher = containerDigitalVoucher.children[0].children.voucherNumber
  containerCheckboxsPaymentMethods[0].childNodes[6].textContent = `Vale Digital / ${numberVoucher.value}`
  containerDigitalVoucher.classList.add('home__box--hidden')
  btnOrderTaxi.classList.remove('home__box--hidden')
})

/*****************************************************/
/*          Validate fields of the menu              */
/*****************************************************/
const menuHome = $('.home__box-functions')

function validateAllFieldMenu() {
  if (origin && destiny != '' & typeTaxiChosen.children[0].classList.length === 3 & chosenCharacteristics.size > 0 & chosenPaymentMethod != undefined) {
    btnOrderTaxi.disabled = false
  } else {
    btnOrderTaxi.disabled = true
  }
}

menuHome.addEventListener('click', () => {
  validateAllFieldMenu()
})

/*****************************************************/
/*          Detail of the order of taxi              */
/*****************************************************/
const mainMenu = $('.content__home')
const containerDetailRequest = $('.container-request')
const conatinerDriverAssigned = $('.container__driver-assigned')
const ForWhoOrderTaxi = document.querySelectorAll('.home__btn-for-who')
const smallCar = $('.location-car')

let whoOrderTaxi
let countdown
let time = 5
let startTime = $('.container-waiting-driver p:not(.fs-17).fw-600').textContent = `00:${('0'+time).slice(-2)}`

ForWhoOrderTaxi.forEach( (who) => {
  who.addEventListener('click', () => {
    whoOrderTaxi = who.textContent
  })
})

function countdownTimer(time) {
  countdown = setInterval(() => {waitTime(time--)}, 1000);
}

function waitTime(time) {
  const waitTime = $('.container-waiting-driver p:not(.fs-17).fw-600')
  waitTime.textContent = `00:${('0'+time).slice(-2)}`
  if (time <= 0) {
    clearInterval(countdown)
    conatinerDriverAssigned.classList.remove('home__box--hidden')
    containerDetailRequest.classList.add('home__box--hidden')
    pointOrigin.classList.remove('home__box--hidden')
    smallCar.classList.remove('home__box--hidden')
  }
}

function showDetailOrder() {
  const details = document.querySelectorAll('.detail-section > p:not(.fw-600)')
  const detailsIcon = document.querySelectorAll('.detail-section > span')
  const detailCharacteristics = $('.detail-section:nth-child(7)')
  let typeTaxi = typeTaxiChosen.children[1].textContent
  let iconTypeTaxi = typeTaxiChosen.children[0].classList[2]
  let methodPayment = chosenPaymentMethod.childNodes[6].textContent
  let iconMethodPayment = chosenPaymentMethod.children[2].classList[2]
  let price = typeTaxiChosen.children[2].textContent

  // taxi
  details[0].textContent = whoOrderTaxi ?? 'Para mi'

  // Origin
  details[2].textContent = origin

  // Destiny
  details[3].textContent = destiny

  // Type of taxi
  details[4].textContent = typeTaxi

  // Icon type of taxi
  detailsIcon[0].classList.add(iconTypeTaxi)
  console.log("type", detailsIcon[0].classList.length);
  if (detailsIcon[0].classList.length >= 5) {
    detailsIcon[0].classList.remove(detailsIcon[0].classList[3])
  }

  // Method payment
  details[5].textContent = methodPayment

  // Icon method payment
  detailsIcon[1].classList.add(iconMethodPayment)
  console.log(detailsIcon[1].classList.length);
  if (detailsIcon[1].classList.length >= 5) {
    detailsIcon[1].classList.remove(detailsIcon[1].classList[3])
  }

  // Characteristics of the taxi
  chosenCharacteristics.forEach( (characteristics) => {
    const IconCharacteristics = `<p>${characteristics}</p>`
    detailCharacteristics.insertAdjacentHTML('beforeend', IconCharacteristics)
  })

  // Price
  details[6].textContent = price
}

btnOrderTaxi.addEventListener('click', () => {
  containerDetailRequest.classList.remove('home__box--hidden')
  mainMenu.classList.add('home__box--hidden')
  routeTrip.classList.add('home__box--hidden')
  pointOrigin.classList.add('home__box--hidden')

  showDetailOrder()

  // countdown
  countdownTimer(time)
})

/*****************************************************/
/*          Cancel trip                              */
/*****************************************************/
const containerCancelTrip = $('.container-cancel-trip')
const btnCancelTrip = $('.container-request .btn-n-cancel')
const cancelTrip = $('.container-cancel-trip > .btn-n')
const optionsCancelTrip = document.querySelectorAll('.container__btn-checkbox-cancel-trip')
const btnCloseInfoDriver = $('.container__driver-assigned .driver-assigned__contact .btn-n')
const orderOtherTaxi = $('.container__driver-assigned .btn-n-lg')

btnCancelTrip.addEventListener('click', () => {
  conatinerDriverAssigned.classList.add('home__box--hidden')
  containerDetailRequest.classList.add('home__box--hidden')
  containerCancelTrip.classList.add('home__box--hidden')
  clearInterval(countdown)
})

function resetAllView() {
  routeTrip.classList.add('home__box--hidden')
  pointOrigin.classList.add('home__box--hidden')
}

function resetAllOptionMenuHome() {
  const allOptionChosen = document.querySelectorAll('.home__box__container__chosen')
  const opntionsMenuHome = document.querySelectorAll('input[name="seccion"]')
  const checkboxsMethodsPayment = document.querySelectorAll('.container__payment__methods .checkbox')
  const opntionMethodPayment = $('input[name="formaPago"] + label')
  const btnsMenuHome = document.querySelectorAll('input[name="seccion"] + label')
  const checkMethodPayment = $('input#formaPago')

  checkMethodPayment.disabled = true
  checkMethodPayment.checked = false
  containerTaxiChosen.classList.add('home__box--hidden')
  sectionCharacteristics.classList.add('home__box--hidden')
  opntionMethodPayment.classList.remove('home__box--hidden')
  
  allOptionChosen.forEach( (option) => {
    option.classList.add('home__box--hidden')
  })

  opntionsMenuHome.forEach( (option) => {
    option.checked = false
  })

  checkboxsMethodsPayment.forEach( (option) => {
    option.checked = false
  })

  btnsMenuHome.forEach( (btn) => {
    btn.style.display = ''
  })
}

function resetAllFieldMenu() {
  origin = '' 
  destiny = '' 
  typeTaxiChosen.children[0].classList.remove(typeTaxiChosen.children[0].classList[2])
  chosenPaymentMethod = undefined
  btnOrderTaxi.disabled = true
}

btnCloseInfoDriver.addEventListener('click', () => {
  containerCancelTrip.classList.remove('home__box--hidden')
  conatinerDriverAssigned.classList.add('home__box--hidden')
  resetAllView()
})

orderOtherTaxi.addEventListener('click', () => {
  resetAllOptionMenuHome()
  resetAllFieldMenu()
  removeAllPreferences()
  resetAllView()
  conatinerDriverAssigned.classList.add('home__box--hidden')
  mainMenu.classList.remove('home__box--hidden')
})

optionsCancelTrip.forEach( (option) => {
  option.addEventListener('click', () => {
    cancelTrip.disabled = false
  })
})

/*****************************************************/
/*          Detail of the driver assigned            */
/*****************************************************/
const containerDriverAssigned = $('.container__driver-assigned')
const driverAssignedTypeCar = $('.driver-assigned__car .fs-18')
let approximateValue = $('.driver-assigned__price')

if (!containerDriverAssigned.classList.contains('home__box--hidden')) {
  driverAssignedTypeCar = typeTaxiChosen.children[1].textContent
}

approximateValue.addEventListener('click', () => {
  
})