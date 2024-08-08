const btn = document.querySelector(".header__burger");
const list = document.querySelector(".header__burger-menu");

function openMenu() {
  if (list.classList.contains("open-menu")) {
    list.classList.remove("open-menu");
  } else {
    list.classList.add("open-menu");
  }
}

btn.addEventListener("click", openMenu);
