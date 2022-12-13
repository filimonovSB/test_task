const rigthsideOnBtn = document.querySelector( '.rigthside-menu-btn__open')
const rigthsideOffBtn = document.querySelector( '.rigthside-menu__close-btn')
const rigthsideMenu = document.querySelector( '.rigthside-menu')
rigthsideOnBtn.addEventListener(
  'click', ()=>{
    rigthsideMenu.classList.add('active')
  }
)
rigthsideOffBtn.addEventListener(
  'click', ()=>{
    rigthsideMenu.classList.remove('active')      
  }
)