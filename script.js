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
        event.preventDefault();
        
        let audioSrc = this.querySelector("img").getAttribute("onclick").match(/'(.*?)'/)[1];
        let audio = new Audio(audioSrc);
        audio.play().then(() => {
            setTimeout(() => {
                window.location.href = this.href;
            }, 1000);
        }).catch(error => {
            console.error("Errore audio:", error);
            window.location.href = this.href;
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const nextPageButton = document.getElementById("nextPageButton");
    const pageSound = document.getElementById("pageSound");

    if (nextPageButton && pageSound) {
        nextPageButton.addEventListener("click", function (event) {
            event.preventDefault();
            pageSound.play().then(() => {
                setTimeout(() => {
                    window.location.href = "pagina2-2.html";
                }, 1000);
            }).catch(error => {
                console.error("Errore audio:", error);
                window.location.href = "pagina2-2.html";
            });
        });
    }
});

toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    imageContainer.classList.toggle("hidden")
});