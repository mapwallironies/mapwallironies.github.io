// Get the modal and the modal image
var modal = document.getElementById("fullscreenModal");
var modalImg = document.getElementById("fullscreenImage");

// Ensure the modal is hidden on page load
window.onload = function() {
  modal.style.display = "none"; // Ensure the modal starts as hidden
}

// Add one event listener for the entire gallery container
document.querySelector('.urban-gallery').addEventListener('click', function(event) {
  if (event.target.tagName === 'IMG') {
    modal.style.display = "flex"; // Use flex to center the modal
    modalImg.src = event.target.src;
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
