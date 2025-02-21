document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("btn");
    button.style.backgroundColor = "grey";
    button.addEventListener("click", function() {
        if (button.style.backgroundColor === "grey"); {
          button.style.backgroundColor = "#7DF9FF";
        } else {
          button.style.backgroundColor = "grey";
        }
    });
});