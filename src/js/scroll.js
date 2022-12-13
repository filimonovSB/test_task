const partink_link=document.querySelector('#partink_link')
const grid_link=document.querySelector('#grid_link')
const typography_link=document.querySelector('#typography_link')
const ui_link=document.querySelector('#ui_link')
let percent = 0

const activateLink = ()=>{
  if (percent >= 0 && percent < 9){
    partink_link.classList.add('active')
  }
  else{
    partink_link.classList.remove('active')
  }
  if (percent >= 9 && percent < 64){
    grid_link.classList.add('active')
  }
  else{
    grid_link.classList.remove('active')
  }
  if (percent >= 64 && percent < 83){
    typography_link.classList.add('active')
  }
  else{
    typography_link.classList.remove('active')
  }
  if (percent >= 83)  {
    ui_link.classList.add('active')
  }
  else{
    ui_link.classList.remove('active')
  } 
}

addEventListener('scroll', function() {
  const max = document.body.scrollHeight - innerHeight
  percent = Math.ceil((pageYOffset / max) * 100)
  activateLink()
}
)

