function slideOut(e) {
  e.preventDefault(); // Prevent immediate navigation
  var url = e.currentTarget.getAttribute('href');
  var container = document.getElementById('pwa-container');
  container.classList.remove('slide-in');
  container.classList.add('slide-out');
  
  // Disable all buttons during the animation
  var buttons = document.querySelectorAll('.slide-button, .back-button');
  buttons.forEach(function(btn) {
    btn.style.pointerEvents = 'none';
  });
  
  // Delay navigation until the animation finishes (500ms)
  setTimeout(function() {
    window.location.href = url;
  }, 500);
}
