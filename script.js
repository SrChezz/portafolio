let mNav = document.getElementById('mobile-navbar');
let nav = document.getElementById('navbar');

mNav.addEventListener('click', function (e) {
  console.log('click');
  nav.classList.toggle('active');
});

console.log(env.TEST)
