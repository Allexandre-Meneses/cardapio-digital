
// MÉTODOS PARA MONTAR O CARDAPIO

function getCardapio() {
    getCategorias()
    getProdutos()
}

// MÉTODO PARA OBTER AS CATEGORIAS

function getCategorias() {
    let main = window.document.querySelector('main')

    axios.get(url + '/categoria')
         .then(response => {
            let categorias = response.data;

            for (let count in categorias){
                let ShowCategorias = document.createElement('div')
                ShowCategorias.setAttribute('class', 'categorias')
                ShowCategorias.innerHTML = `
                    <label for="">${categorias[count]['name']}:</label>
                    <br>
                    <div id="id${categorias[count]['id']}" class="itens">  
                    </div>
                `
                main.append(ShowCategorias)  
            }
         })
         .catch(error => {
            alert(JSON.stringify(error.data))
         })
}

// MÉTODO PARA OBTER OS PRODUTOS

function getProdutos() {
    axios.get(url + '/produto')
         .then(response => {
            let produtos = response.data;
            let itens;

            console.log(produtos)
            for (let count in produtos) {
                itens = document.querySelector(`.itens#id${produtos[count]['categoria_id']}`)
                let ShowProdutos = document.createElement('div')
                ShowProdutos.setAttribute('class', 'item')
                ShowProdutos.innerHTML = `
                    <label for="">${produtos[count]['name']}</label>
                `
                itens.append(ShowProdutos)
            }
         })
         .catch(error => {
            alert(JSON.stringify(error.data))
         })         
}

