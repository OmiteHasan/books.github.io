/* Sticky Fixed Navigation */

const navBar = document.querySelector(".navbar");
const goTopBtn = document.querySelector(".gotopbtn");

window.addEventListener('scroll', function () {
    const navHeight = navBar.getBoundingClientRect().height;
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > navHeight) {
        navBar.classList.add("sticky");
    } else {
        navBar.classList.remove("sticky");
    }

    if (scrollHeight > 500) {
        goTopBtn.classList.add("gotopbtn-show");
    } else {
        goTopBtn.classList.remove("gotopbtn-show");
    }

});

