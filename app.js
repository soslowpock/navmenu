const body = document.querySelector('body');
const navItems = document.querySelector('#items_list');
const navMenu = document.querySelector('.nav-menu');
const toggleButton = document.querySelector('#toggle');
const wall = document.querySelector('.wall');

wall.addEventListener('mouseenter', e => {
  navMenu.classList.contains('hidden') ? navMenu.classList.remove('hidden') : console.log('done')
})


navItems.addEventListener('click', e => {
if (!e.target.classList.contains('selected')) {
  e.target.classList.add('selected')
} else {
  e.target.classList.remove('selected')
}

})  
  
toggleButton.addEventListener('click', toggle)

function toggle() {

!navMenu.classList.contains('hidden') ? navMenu.classList.add('hidden') : navMenu.classList.remove('hidden')

  
}


