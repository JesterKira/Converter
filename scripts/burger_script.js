const Body = document.querySelector("body");
const Burger = document.querySelector(".burger");
const NavMenu = document.querySelector(".burger-navigation_menu")
const NavLinks = document.querySelectorAll(".navigation_link")

Burger.addEventListener("click", function () {
    Burger.classList.toggle("burger-active");

    if (Burger.classList.contains("burger-active")) {
        NavMenu.classList.add("menu-active");
        Body.classList.add("lock");
    }
    else {
        NavMenu.classList.remove("menu-active");
        Body.classList.remove("lock");
    }
})

for (let NavLink of NavLinks) {
    NavLink.addEventListener("click", function (event) {
        if (Burger.classList.contains("burger-active")) {
            NavMenu.classList.remove("menu-active");
            Burger.classList.remove("burger-active");
            Body.classList.remove("lock");
        }
    })
} 