const $ = (element) => document.querySelector(element);

/* Open and close options of the menu */
const btnsDropdown = document.querySelectorAll(".home__box__container__btn");
const optionsMenu = document.querySelectorAll(".home__box__content");
const menu = document.querySelector(".home__box-functions");

/* function hideAllMenus(btnPressed) {
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
} */

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

btnsDropdown.forEach((btn) => {
  btn.addEventListener("click", () => {
    const btnCheck = $('.home__box__container__btn   .home__input-radio:checked')
    // const btnNoCheck = document.querySelectorAll('.home__input-radio:not(:checked)')
    if(btnCheck){

      console.log(btnCheck);
    }

    let btnPressed = btn.dataset.section;
    // hideAllMenus();
    stateBtns(btnsDropdown, btnPressed);
  });
});

/* Menu */
const btnMenuOpen = $(".btn-n-menu");
const btnMenuClose = $(".btn-n-menu__close");
const homeMenu = $(".home__menu__side");

if (btnMenuOpen && btnMenuClose) {
  btnMenuOpen.addEventListener("click", () => {
    homeMenu.style.transform = "translateX(0)";
  });
  btnMenuClose.addEventListener("click", () => {
    homeMenu.style.transform = "translateX(2000%)";
  });
}

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
        partOneLogin.style.display = 'none'
        partTwoLogin.style.display = 'flex'
    });
    
    btnBackLogin.addEventListener('click' , () => {
        partOneLogin.style.display = 'flex'
        partTwoLogin.style.display = 'none'
    });    
}
