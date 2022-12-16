const button = document.querySelector(".header__image")
const sidebar = document.querySelector(".sidebar")

button.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar--active")
})