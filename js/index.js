// Scrollbar navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
}

//typing effect
var typed = new Typed('.name', {
    strings: ["Mehedi Manav", ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
});