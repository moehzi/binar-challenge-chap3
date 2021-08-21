const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".menu__container");
const scrollDown = document.querySelector(".scroll-down-button");
menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});
