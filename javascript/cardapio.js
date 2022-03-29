// MÉTODO PARA ENTRAR NOS PRODUTOS

function abreProdutos(id) {
    localStorage.removeItem('id')
    localStorage.setItem('id', id)
    window.location.href = "produtos.html"
}