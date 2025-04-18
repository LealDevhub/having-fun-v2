const search = document.querySelector("#search")
const grid = document.querySelector("#grid")
const pet = document.querySelector("#pet")
const user = document.querySelector("#user")
const vet = document.querySelector("#vet")
const settings = document.querySelector("#settings")
const active = document.querySelector(".active")
const sidebar = document.querySelector(".sidebar")

const menu_sidebar = document.querySelector("#menu-sidebar")


search.addEventListener("click", () => {
    active.style.top = "0"
})

grid.addEventListener("click", () => {
    active.style.top = "54px"
})

user.addEventListener("click", () => {
    active.style.top = "108px"
})

settings.addEventListener("click", () => {
    active.style.top = "162px"
})

const menu = document.querySelector("#menu")

menu.addEventListener("click", () => {
    sidebar.classList.toggle("show")
})

menu_sidebar.addEventListener("click" , () => {
    sidebar.classList.toggle("show")
})