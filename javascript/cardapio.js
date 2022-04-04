// MÉTODO PARA ENTRAR NOS PRODUTOS

function abreProdutos(categoria_id, categoria) {
    localStorage.removeItem('categoria_id')
    localStorage.removeItem('categoria')
    localStorage.setItem('categoria_id', categoria_id)
    localStorage.setItem('categoria', categoria)
    window.location.href = "produtos.html"
}

function abreProduto(produto_id) {
    localStorage.removeItem('produto_id')
    localStorage.setItem('produto_id', produto_id)
    window.location.href = "produto.html"
}

function AdicionarPedido() {
    let produto_id = localStorage.getItem('produto_id')
    let pedidos = JSON.parse(localStorage.getItem('pedidos'))

    if (pedidos == null) {
        localStorage.setItem('pedidos', JSON.stringify(pedidos = []))
    }

    pedidos.push(Number(produto_id))

    localStorage.setItem('pedidos', JSON.stringify(pedidos))



}