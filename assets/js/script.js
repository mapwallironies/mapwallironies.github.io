// Get all images and the modal
var images = document.querySelectorAll('.urban-category img');
var modal = document.getElementById("fullscreenModal");
var modalImg = document.getElementById("fullscreenImage");

// Ensure the modal is hidden on page load
window.onload = function() {
  modal.style.display = "none"; // Ensure the modal starts as hidden
}

// Loop through each image to add click event for full-screen
images.forEach(function(image) {
  image.onclick = function() {
    modal.style.display = "flex"; // Use flex to center the modal
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
