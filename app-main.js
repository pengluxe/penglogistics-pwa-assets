// Register Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.error('Service Worker registration failed:', err));
}

// Google Sign-In Callback
function onSignIn(googleUser) {
  const profile = googleUser.getBasicProfile();
  document.getElementById('appGoogleSignIn').innerHTML =
    '<img src="' + profile.getImageUrl() + '" alt="User Icon" class="app-user-icon">';
}

// Toggle the Side Menu
document.getElementById('appMenuButton').addEventListener('click', function() {
  const appSideMenu = document.getElementById('appSideMenu');
  appSideMenu.classList.toggle('open');
});

// Slider Functionality
let currentIndex = 0;
const slides = document.querySelectorAll('.app-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
    slide.style.transition = 'transform 0.5s ease-in-out';
  });
}

// Auto-slide (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

// Initialize Slider
showSlide(currentIndex);
