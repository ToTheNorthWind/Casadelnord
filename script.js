const toggleButton = document.getElementById("toggleButton");
const body = document.body;
document.addEventListener("DOMContentLoaded", function() {
  toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    const images = document.querySelectorAll("img");
    images.forEach(function(img) {
      if (body.classList.contains("light-mode")) {
        images.forEach(image => {
          Image.style.display = "block";
        });
      } else {
        images.forEach(image  => {
          Image.style.display = "none";
    });
  });
});