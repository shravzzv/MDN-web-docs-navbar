const trigger = document.querySelector('.hamburger')
const target = document.querySelector('nav')

const handleClick = (e) => {
  target.classList.toggle('active')
}

trigger.addEventListener('click', handleClick)

const handleNavItemClick = (e) => {
  e.stopPropagation()
  e.currentTarget.classList.toggle('active')
}

const navItems = document.querySelectorAll('.navbar-item')

Array.from(navItems).forEach((navItem) =>
  navItem.addEventListener('click', handleNavItemClick)
)
