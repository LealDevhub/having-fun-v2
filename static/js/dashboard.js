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
var section_settings = document.querySelector("#section-settings")

var toggle_theme = document.querySelector('input[name="toggle_theme"]')

toggle_theme.addEventListener("click" , () => {
    var bg_dash = document.body
    
    bg_dash.classList.toggle("dark")

})

conteudos.addEventListener("click", () => { 
    active.style.top = "0"

    sidebar.classList.remove("show")

    section_conteudos.style.display = "block";
    section_calendar.style.display = "none";

    section_profile.style.display = "none";
    section_settings.style.display = "none";
})

cronograma.addEventListener("click", () => {
    active.style.top = "54px"

    sidebar.classList.remove("show")


    section_conteudos.style.display = "none";
    section_calendar.style.display = "block";

    section_profile.style.display = "none";
    section_settings.style.display = "none";
})

perfil.addEventListener("click", () => {
    active.style.top = "108px"
    
    sidebar.classList.remove("show")

    section_conteudos.style.display = "none";
    section_calendar.style.display = "none";

    section_profile.style.display = "block";
    section_settings.style.display = "none";
})

configuracoes.addEventListener("click", () => {
    active.style.top = "162px"

    sidebar.classList.remove("show")

    section_conteudos.style.display = "none";
    section_calendar.style.display = "none";

    section_profile.style.display = "none";
    section_settings.style.display = "block";
})

const menu = document.querySelector("#menu")

menu.addEventListener("click", () => {
    sidebar.classList.toggle("show")
})

menu_sidebar.addEventListener("click" , () => {
    sidebar.classList.toggle("show")
})

/* Perfil profile */