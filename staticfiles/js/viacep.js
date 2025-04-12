const cep = document.querySelector('#cep')
const street = document.querySelector('#street')
const city = document.querySelector('#city')
const state = document.querySelector('#state')
const message = document.querySelector('#message')

cep.addEventListener('focusout', async () => {

    try {
        const onlyNumber = /^[0-9]+$/
        const cepValid = /^[0-9]{8}$/

        if(!onlyNumber.test(cep.value) || !cepValid.test(cep.value)) {
            throw { cep_error: 'Cep invalid' }
        }

        const response = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)

        if(!response.ok) {
            throw await response.json()
        }

        const responseCep = await response.json()

        street.value = responseCep.logradouro
        city.value = responseCep.localidade
        state.value = responseCep.uf

    } catch (error) {
        if(error?.cep_error) {
            message.textContent = error.cep_error
            setTimeout(() => {
                message.textContent = ""
            }, 5000)
        }
    }

})