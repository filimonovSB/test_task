const desktopBtn = document.querySelector( '#sliderBtnDesktop ')
const mobileBtn = document.querySelector( '#sliderBtnMobile ')
const desktopContent = document.querySelector( '.slider__content-desctop ')
const mobileContent = document.querySelector( '.slider__content-mobile ')

desktopBtn.addEventListener( 'click ', ()=>{
  debugger
  mobileContent.classList.remove('active')
  desktopContent.classList.add('active')
  mobileBtn.classList.remove('active')
  desktopBtn.classList.add('active')
})

mobileBtn.addEventListener( 'click ', ()=>{
  debugger
  mobileContent.classList.add('active')
  desktopContent.classList.remove('active')
  mobileBtn.classList.add('active')
  desktopBtn.classList.remove('active')
})
