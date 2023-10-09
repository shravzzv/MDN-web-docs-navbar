const trigger = document.querySelector('.hamburger')
const target = document.querySelector('nav')

const handleClick = (e) => {
  target.classList.toggle('active')
  if (target.classList.contains('active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }
}

trigger.addEventListener('click', handleClick)

const handleNavItemClick = (e) => {
  e.stopPropagation()
  e.currentTarget.classList.toggle('active')
}

const handleDropdownLinkClick = (e) => {
  e.preventDefault()
  e.stopPropagation()
}

const navItems = document.querySelectorAll('.navbar-item')

Array.from(navItems).forEach((navItem) =>
  navItem.addEventListener('click', handleNavItemClick)
)

const dropdownLinks = document.querySelectorAll('.dropdown-item a')
Array.from(dropdownLinks).forEach((link) =>
  link.addEventListener('click', handleDropdownLinkClick)
)
