let menuButton = document.querySelector("[menu-button]");
let mobile_menu = document.querySelector("[mobile-menu]");

menuButton.addEventListener("click", toggle);

function toggle() {
    menuButton.classList.toggle('is-open');
    mobile_menu.classList.toggle('is-open');
}