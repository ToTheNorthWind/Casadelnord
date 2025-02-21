const toggleButton = document.getElementById("toggleButton"); 
const body = document.body;

toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");

    document.querySelectorAll("img").forEach(image => {
        image.classList.toggle("hidden");
    });
});