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