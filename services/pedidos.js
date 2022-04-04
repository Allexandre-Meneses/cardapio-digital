// MÉTODO PARA OBTER OS PEDIDOS 

function getProdutos() {

    let pedidos = JSON.parse(localStorage.getItem('pedidos'))
    let containerpedidos = window.document.getElementById('containerpedidos')

    for (let count in pedidos) {
    axios.get(url + `/produto/${pedidos[count]}`)
         .then(response => {
            let produto = response.data
            let Showpedido = document.createElement('div')
            Showpedido.setAttribute('class', 'pedido')
            Showpedido.innerHTML = `
                <label class="nomepedido" for="">${produto['name']}</label>
                <label class="precopedido" for="">${produto['preco'].toFixed(2).replace(".", ",")}</label>
                <img src="../icons/lixeirinha.png" alt="">
            `
            containerpedidos.append(Showpedido)
         })
         .catch(error => {
            alert(error)
         })
    }
}
