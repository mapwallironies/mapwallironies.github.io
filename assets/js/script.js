// Get all images and the modal
var images = document.querySelectorAll('.urban-category img');
var modal = document.getElementById("fullscreenModal");
var modalImg = document.getElementById("fullscreenImage");

// Loop through each image to add click event for full-screen
images.forEach(function(image) {
  image.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
});

// Close the modal when clicking outside the image
modal.onclick = function(event) {
  if (event.target === modal) {
    closeFullscreen();
  }
};

// Close the modal function
function closeFullscreen() {
  modal.style.display = "none";
}

// Check if user has a preference stored
const userTheme = localStorage.getItem('theme');

// Set the theme based on stored preference or system preference
if (userTheme) {
  document.documentElement.setAttribute('data-theme', userTheme);
} else {
  // If no preference stored, use the system's preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}

// Toggle theme function
const toggleTheme = () => {
  let currentTheme = document.documentElement.getAttribute('data-theme');
  let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme); // Save user preference
};

// Add a button or toggle to switch themes
const themeButton = document.getElementById('theme-toggle');
if (themeButton) {
  themeButton.addEventListener('click', toggleTheme);
}
