let burgerMenuBtn = document.querySelector(".nav__button");
let burgerMenu = document.querySelector(".nav__mobile ul");

burgerMenuBtn.addEventListener("click", function() {
    if (burgerMenu.style.top == "-400px") {
        burgerMenu.style.top = "115px";
    }
    else {
        burgerMenu.style.top = "-400px";
    }
})