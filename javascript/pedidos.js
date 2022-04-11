// MÉTODO PARA ADICIONAR PEDIDO USANDO O LOCAL STORAGE

function adicionarPedido() {

    let produto_id = localStorage.getItem('produto_id')
    let pedidos = JSON.parse(localStorage.getItem('pedidos'))
    
    let quantidade = Number(document.querySelector('#quantidade').value)

    if (pedidos == null) {
        localStorage.setItem('pedidos', JSON.stringify(pedidos = []))
    }

    for (let count = 0; count < quantidade; count++){
        pedidos.push(Number(produto_id))
    }

    localStorage.setItem('pedidos', JSON.stringify(pedidos))

    window.location.href = "pedidos.html"

}

function removePedido(id) {

    let pedidos = JSON.parse(localStorage.getItem('pedidos'))

    let index = pedidos.indexOf(id)

    pedidos.splice(index, 1)

    localStorage.setItem('pedidos', JSON.stringify(pedidos))

    window.location.reload()
}
