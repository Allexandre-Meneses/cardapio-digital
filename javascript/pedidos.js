// MÉTODO PARA ADICIONAR PEDIDO USANDO O LOCAL STORAGE

function AdicionarPedido() {
    let produto_id = localStorage.getItem('produto_id')
    let pedidos = JSON.parse(localStorage.getItem('pedidos'))

    if (pedidos == null) {
        localStorage.setItem('pedidos', JSON.stringify(pedidos = []))
    }

    pedidos.push(Number(produto_id))

    localStorage.setItem('pedidos', JSON.stringify(pedidos))

}

function removePedido(id) {
    alert(id)
    let pedidos = JSON.parse(localStorage.getItem('pedidos'))

    let index = pedidos.indexOf(id)

    pedidos.splice(index, 1)

    localStorage.setItem('pedidos', JSON.stringify(pedidos))

    window.location.reload()
}
