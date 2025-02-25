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

document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("backToPage2");
    const pageSound = document.getElementById("pageSound");

    if (backButton && pageSound) {
        backButton.addEventListener("click", function (event) {
            event.preventDefault(); // Evita il cambio di pagina immediato
            pageSound.play().then(() => {
                setTimeout(() => {
                    window.location.href = "pagina2.html"; // Cambia pagina dopo il suono
                }, 1000); // Tempo di attesa (1 secondo)
            }).catch(error => {
                console.error("Errore audio:", error);
                window.location.href = "pagina2.html"; // Se l'audio non parte, cambia subito pagina
            });
        });
    }
});

toggleButton.addEventListener("click", function() {
    body.classList.toggle("light-mode");
    imageContainer.classList.toggle("hidden")
});