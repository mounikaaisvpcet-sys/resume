const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach(item => {
        const windowHeight = window.innerHeight;
        const elementTop = item.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealElements);
window.addEventListener("load", revealElements);
