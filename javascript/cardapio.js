// MÉTODO PARA ENTRAR NOS PRODUTOS

function abreProdutos(id, categoria) {
    localStorage.removeItem('id')
    localStorage.removeItem('categoria')
    localStorage.setItem('id', id)
    localStorage.setItem('categoria', categoria)
    window.location.href = "produtos.html"
}