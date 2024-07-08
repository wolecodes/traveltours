// *******************  Date ****************

// date
const date = (document.getElementById('date').innerHTML =
  new Date().getFullYear());

// 8*********************** nav toggle****************

// select button and links
const navBar = document.querySelector('.nav-links');
const navOpen = document.getElementById('nav-toggle');

// add eventlistener to the toggle button
navOpen.addEventListener('click', function () {
  navBar.classList.toggle('show-links');
});
