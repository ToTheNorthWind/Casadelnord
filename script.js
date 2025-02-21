const toggleButton = document.getElementById("toggleButton");
const body = document.body;
  toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    const images = document.querySelectorAll("img");
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