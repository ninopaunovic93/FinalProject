const myArray = []
let myObject = {}

const customerName = document.querySelector('#customerName')
const dinoName = document.querySelector('#dino-select')
const napomena = document.querySelector('#napomena')
const form = document.querySelector('form')


form.addEventListener('submit', e => {
    e.preventDefault()

    if (customerName.value !== '' && dinoName.value !== '') {

        if (customerName.value.charAt(0) === customerName.value.charAt(0).toUpperCase()) {

            if (customerName.value.length > 3) {

                myObject = {
                    kupac: customerName.value.trim(),
                    dinosaurus: dinoName.value,
                    napomena: napomena.value
                }

                myArray.push(myObject)
                console.log(myArray)
            } else {
                alert('ime mora imati vise od 4 slova')
                return
            }
        } else {
            alert('Prvo slovo mora biti veliko')
            return
        }

    } else {
        alert('morate popuniti polja')
        return
    }
})
