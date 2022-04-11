//FUNÇÃO PARA MOSTRAR O POP UP

function mostrarPopup() {
    let popup = document.querySelector('.popup')
    popup.style.display = 'block'
    document.querySelector('#quantidade').focus()
}

function fecharPopup() {
    let popup = document.querySelector('.popup')
    popup.style.display = 'none'
}