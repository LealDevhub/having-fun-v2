const conteudos = document.querySelector("#content")
const cronograma = document.querySelector("#calendar")
const perfil = document.querySelector("#user")
const configuracoes = document.querySelector("#settings")
const active = document.querySelector(".active")
const sidebar = document.querySelector(".sidebar")

const menu_sidebar = document.querySelector("#menu-sidebar")


var section_conteudos = document.querySelector("#section-conteudos") 
var section_calendar = document.querySelector("#section-calendar")
var section_profile = document.querySelector("#section-profile")

conteudos.addEventListener("click", () => { 
    active.style.top = "0"

    section_conteudos.style.display = "block";
    section_calendar.style.display = "none";

    section_profile.style.display = "none";
})

cronograma.addEventListener("click", () => {
    active.style.top = "54px"

    section_conteudos.style.display = "none";
    section_calendar.style.display = "block";

    section_profile.style.display = "none";
})

perfil.addEventListener("click", () => {
    active.style.top = "108px"
    
    section_conteudos.style.display = "none";
    section_calendar.style.display = "none";

    section_profile.style.display = "block";
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

/* Perfil profile */