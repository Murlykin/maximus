const navLinks = document.querySelectorAll(".nav__link");

for(let navItem of navLinks) {
    navItem.addEventListener("click", function() {
        console.log(navItem.text);
    });
}