// MÉTODO PARA OBTER OS PEDIDOS 

function getProdutos() {

    let pedidos = JSON.parse(localStorage.getItem('pedidos'))

    let containerpedidos = window.document.getElementById('containerpedidos')
    let total = window.document.getElementById('valortotal')

    let valorTotal = 0

    for (let count in pedidos) {
    axios.get(url + `/produto/${pedidos[count]}`)
         .then(response => {
            let produto = response.data
            let Showpedido = document.createElement('div')
            Showpedido.setAttribute('class', 'pedido')
            Showpedido.innerHTML = `
                <label class="nomepedido" for="">${produto['name']}</label>
                <label class="precopedido" for="">${produto['preco'].toFixed(2).replace(".", ",")}</label>
                <img src="../icons/lixeirinha.png" onclick="removePedido(${produto['id']})">
            `
            containerpedidos.append(Showpedido)
            
            valorTotal = valorTotal+ Number(produto['preco'])

            total.innerHTML = valorTotal.toFixed(2).replace(".", ",") + " R$ "
         })
         .catch(error => {
            alert(error)
         })
    }
}

