const selectBtns = document.querySelectorAll('.custom-select__toggle')
const options = document.querySelectorAll('.custom-select__option')

const selectOption = (e) => {
  const option  = e.target
  const value = option.getAttribute('data-value')   
  const nodes = option.parentNode.querySelectorAll('.custom-select__option')
  nodes.forEach(node=>{
    value === node.getAttribute('data-value')
      ? 
      node.classList.add('active')
      :
      node.classList.remove('active') 
        
  })

  const select = option.parentNode.parentNode.parentNode
  const selectBtn = select.querySelector('.custom-select__toggle')

  selectBtn.innerHTML = value   
  selectBtn.setAttribute('data-value', value) 
  selectBtn.classList.remove('active')

  select.querySelector('.custom-select__dropdown').classList.remove('active')
}

options.forEach(op=>op.addEventListener('click',selectOption))

selectBtns.forEach(btn=>{
  btn.addEventListener('click',(e) => {

    btn = e.target
    btn.classList.toggle('active')
    btn.parentNode.querySelector('.custom-select__dropdown').classList.toggle('active') 
  }
  )    
}
)


 