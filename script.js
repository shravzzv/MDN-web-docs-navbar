const trigger = document.querySelector('.hamburger')
const target = document.querySelector('nav')
const navItems = document.querySelectorAll('.navbar-item')
const dropdownLinks = document.querySelectorAll('.dropdown-item a')

const handleClick = (e) => {
  target.classList.toggle('active')
  if (target.classList.contains('active')) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }
}

const handleNavItemClick = (e) => {
  if (window.innerWidth <= 768) {
    e.stopPropagation()
    e.currentTarget.classList.toggle('active')
  }
}

const handleDropdownLinkClick = (e) => {
  e.stopPropagation()
}

trigger.addEventListener('click', handleClick)

Array.from(navItems).forEach((navItem) =>
  navItem.addEventListener('click', handleNavItemClick)
)

Array.from(dropdownLinks).forEach((link) =>
  link.addEventListener('click', handleDropdownLinkClick)
)
