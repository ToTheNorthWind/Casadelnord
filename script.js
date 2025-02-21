document.addEventListener("DOMContentLoaded", function() {
  const toggleButton = document.getElementById("toggleButton");
  toggleButton.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    const images = document.querySelectorAll("img");
    images.forEach(function(img) {
      if (document.body.classList.contains("light-mode")) {
        Img.classList.remove("hidden");
      } else {
        Img.classList.add("hidden");
      }
    });
  });
});