// Get the modal and the modal image
var modal = document.getElementById("fullscreenModal");
var modalImg = document.getElementById("fullscreenImage");

// Force hide the modal as soon as the page loads
document.addEventListener("DOMContentLoaded", function () {
  modal.style.display = "none"; // Ensures it starts as hidden
});

// Add one event listener for the entire gallery container
document.querySelector('.urban-gallery').addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    modal.style.display = "flex"; // Show the modal when an image is clicked
    modalImg.src = event.target.src; // Set the clicked image as the modal content
  }
});

// Close the modal when clicking outside the image
modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    closeFullscreen(); // Close the modal if the background (not the image) is clicked
  }
});

// Close the modal function
function closeFullscreen() {
  modal.style.display = "none"; // Hide the modal
}
