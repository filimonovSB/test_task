const accordions = document.querySelectorAll('.accordion')

const toggleAccardion = (e) => {
  console.log("Что вообще работает????");
  const accardion = e.target
  const panel = accardion.nextElementSibling

  accardion.classList.toggle( 'active')
  panel.classList.toggle( 'active')
    
  panel.style.height 
    ?
    panel.style.height = null
    :
    panel.style.height =  'auto'
}

accordions.forEach(
  accordion => {
    accordion.addEventListener( 'click', toggleAccardion )
  }
)