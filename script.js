const trigger = document.querySelector('.hamburger')
const target = document.querySelector('ul')

const handleClick = (e) => {
  target.classList.toggle('active')
}

trigger.addEventListener('click', handleClick)
