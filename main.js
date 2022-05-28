const myArray = []
let myObject = {}

const customerName = document.querySelector('#customerName')
const dinoName = document.querySelector('#dino-select')
const Napomena = document.querySelector('#napomena')
const form = document.querySelector('form')
const ispisKupaca = document.querySelector('#ispisKupaca')


form.addEventListener('submit', e => {
    e.preventDefault()

    if (customerName.value !== '' && dinoName.value !== '') {

        if (customerName.value.charAt(0) === customerName.value.charAt(0).toUpperCase()) {

            if (customerName.value.length > 3) {

                myObject = {
                    kupac: customerName.value.trim(),
                    dinosaurus: dinoName.value,
                    napomena: Napomena.value.trim() !== '' ? Napomena.value.trim() : 'poruka' 
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

const isipisiNarudzbine = () => {
    const prikazanKupci = document.querySelectorAll('.jedanKupac')
    const kupciPrikazani = prikazanKupci.length > 0

    if (kupciPrikazani) {
        return
    }
        myArray.forEach((e, index) => {
            let ispisJednogKupca = document.createElement('div')
            ispisJednogKupca.classList.add('jedanKupac')

            let kupac = document.createElement('p')
            kupac = e.kupac

            let opis = document.createElement('p')
            opis = e.napomena

            let dino = document.createElement('p')
            dino = e.dinosaurus

            let dugme = document.createElement('BUTTON')
            dugme.innerHTML = `obrisi`
            dugme.onclick = (index) => {

                if (myArray.length > 0) {

                    myArray.splice(index, 1)
                    ispisJednogKupca.remove()
                }
                console.log(myArray)
            }

            ispisJednogKupca.innerHTML = `
                <p><span>Kupac:</span> ${kupac}</p> <br>
                <p><span>Napomena:</span> ${opis}</p> <br> 
                <p><span>Dinosaurus:</span> ${dino}</p> <br>
                `
            ispisJednogKupca.append(dugme)
            ispisKupaca.append(ispisJednogKupca)
        })
    }
