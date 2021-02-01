const burgerIcon = document.querySelector(".burger-icon");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");
//nav animation

burgerIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = "";
        }
        else{
            link.style.animation = `navLinkFadeIn 0.4s ease forwards ${index/10+0.6}s`;
        }
    })
    //burger to cross
    burgerIcon.classList.toggle("cross")
})