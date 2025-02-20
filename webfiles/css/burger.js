document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("burger-icon");
    const burgerMenu = document.getElementById("burger-menu");

    burgerIcon.addEventListener("click", function () {
        burgerIcon.classList.toggle("active");
        burgerMenu.classList.toggle("active");
    });
}); 