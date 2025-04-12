var study_shifts = document.querySelectorAll('.study-shift .radio-wrapper .radio-inner')
var morning_radios = document.querySelector('.periods .morning-radios')
var evening_radios = document.querySelector('.periods .evening-radios')
var night_radios = document.querySelector('.periods .night-radios')


study_shifts.forEach(item => {
    item.addEventListener('click', () => {
        if(item.innerText == "Manhã") {
            morning_radios.style.display = "block"  
            evening_radios.style.display = "none"
            night_radios.style.display = "none" 
        } else if(item.innerText == "Tarde") {
            morning_radios.style.display = "none"  
            evening_radios.style.display = "block"
            night_radios.style.display = "none"  
        } else {
            morning_radios.style.display = "none"  
            evening_radios.style.display = "none"
            night_radios.style.display = "block"
        }
    })
})