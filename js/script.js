const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// function toggle() {
//   var blur = document.getElementsByClassName('image-grid');

//   for (var i = 0; i < image-grid.length; i++) {
//     image-grid[i].classList.toggle('active');
//   }

//   var popup = document.getElementById('burger');
//   popup.classList.toggle('active')
// }