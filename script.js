let mNav = document.getElementById('mobile-navbar');
let nav = document.getElementById('navbar');

mNav.addEventListener('click', function (e) {
  nav.classList.toggle('active');
});

const CV = document.getElementById('CV');

CV.addEventListener('click', function (e) {
  // e.preventDefault();
  // console.log('test');
  gtag('event', 'cv_view', {
    app_name: 'Portafolio',
    screen_name: 'Home',
  });
});
