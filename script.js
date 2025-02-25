const toggleButton = document.getElementById("toggleButton"); 
const body = document.body;
const imageContainer = document.querySelector(".image-container");

function playSound(src) {
    let audio = new Audio(src);
    audio.play();
}

function playClickSound(src) {
    let audio = new Audio(src);
    audio.play();
}

document.querySelectorAll(".image-container a").forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Impedisce il cambio immediato di pagina
        
        let audioSrc = this.querySelector("img").getAttribute("onclick").match(/'(.*?)'/)[1];
        let audio = new Audio(audioSrc);
        audio.play().then(() => {
            setTimeout(() => {
                window.location.href = this.href; // Dopo il suono, vai alla pagina
            }, 500); // Aspetta mezzo secondo (puoi aumentare se il suono è più lungo)
        }).catch(error => {
            console.error("Errore audio:", error);
            window.location.href = this.href; // Se c'è un errore, vai comunque alla pagina
        });
    });
});

toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    imageContainer.classList.toggle("hidden")
});