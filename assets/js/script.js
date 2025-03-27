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
