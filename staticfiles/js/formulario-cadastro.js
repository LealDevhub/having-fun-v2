async function sendMail() {
  let params = {
    fullname : document.getElementById('fullname').value,
    birth : document.getElementById('datepicker').value,
    gender : document.getElementById('gender').value,
    cep : document.getElementById('cep').value,
    street : document.getElementById('street').value,
    number : document.getElementById('number').value,
    city : document.getElementById('city').value,
    state : document.getElementById('state').value,
    guardian : document.getElementById('guardian').value,
    phone : document.getElementById('phone').value,
    email : document.getElementById('email').value,
    study_shift : document.querySelector('input[name="study-shift"]:checked').value,
    time : document.querySelector('input[name="time"]:checked').value,
    payment : document.querySelector('input[name="payment"]:checked').value
  }

  await emailjs.send('service_d20g404', 'template_ogmo67k', params).then(console.log('Ok'))
  
  await window.location.replace("/");

}