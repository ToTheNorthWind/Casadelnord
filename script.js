const toggleButton = document.getElementById("toggleButton"); 
const body = document.body;
const imageContainer = document.querySelector(".image-container");

toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    imageContainer.classList.toggle("hidden")
});