const toggleButton = document.getElementById("toggleButton"); 
const body = document.body;
const imageContainer = document.querySelector(".image-container");

function playSound(src) {
    let audio = new Audio(src);
    audio.play();
}

toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    imageContainer.classList.toggle("hidden")
});