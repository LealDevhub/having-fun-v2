const conteudos = document.querySelector("#content")
const cronograma = document.querySelector("#calendar")
const perfil = document.querySelector("#user")
const configuracoes = document.querySelector("#settings")
const active = document.querySelector(".active")
const sidebar = document.querySelector(".sidebar")

const menu_sidebar = document.querySelector("#menu-sidebar")


conteudos.addEventListener("click", () => {
    active.style.top = "0"
})

cronograma.addEventListener("click", () => {
    active.style.top = "54px"
})

perfil.addEventListener("click", () => {
    active.style.top = "108px"
})

configuracoes.addEventListener("click", () => {
    active.style.top = "162px"
})

const menu = document.querySelector("#menu")

menu.addEventListener("click", () => {
    sidebar.classList.toggle("show")
})

menu_sidebar.addEventListener("click" , () => {
    sidebar.classList.toggle("show")
})