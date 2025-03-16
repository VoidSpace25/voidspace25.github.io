document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("colorToggle");

    button.addEventListener("click", function(){
        document.body.classList.toggle("dark-mode");
    });
});
