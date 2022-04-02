// MÉTODO PARA OBTER AS CATEGORIAS

function getCategorias() {
    let main = window.document.querySelector('main')

    axios.get(url + '/categoria')
         .then(response => {
            let categorias = response.data;

            for (let count in categorias){
                let ShowCategorias = document.createElement('div')
                ShowCategorias.setAttribute('class', 'categorias')
                ShowCategorias.setAttribute('onclick', `abreProdutos(${categorias[count]['id']},
                "${categorias[count]['name']}")`)
                ShowCategorias.innerHTML = `
                    <label>${categorias[count]['name']}</label>
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
    document.querySelector('label#categoria').innerHTML = `${localStorage.getItem('categoria')}:`
    axios.get(url + '/produto')
         .then(response => {
            let section = document.querySelector('section')
            let produtos = response.data;
            let categoria_id = localStorage.getItem('categoria_id')

            for (let count in produtos) {
                if (produtos[count]['categoria_id'] == categoria_id) {
                let ShowProdutos = document.createElement('div')
                ShowProdutos.setAttribute('class', 'produto')
                ShowProdutos.setAttribute('onclick', `abreProduto(${produtos[count]['id']})`)
                ShowProdutos.innerHTML = `
                    <label class="nome">${produtos[count]['name']}</label>
                    <label class="preco">${produtos[count]['preco'].toFixed(2).replace(".", ",")}</label>
                `
                section.append(ShowProdutos)
                }
            }
         })
         .catch(error => {
            alert(JSON.stringify(error.data))
         })         
}

function getProduto() {
    let produto_id = localStorage.getItem('produto_id')
    axios.get(url + `/produto/${produto_id}`)
         .then(response => {
            let produto = response.data
            let name = document.querySelector('#nameproduto')
            let descricao = document.querySelector('#descricao')
            let preco = document.querySelector('#preco')

            name.innerHTML = `
                <label for="">${produto.name}</label>
            `
            descricao.innerHTML = `
                <label for="">Descrição:</label>
                <p>
                ${produto.description}
                </p>
            `
            preco.innerHTML = `
                ${produto.preco.toFixed(2).replace(".", ",")}
            `
         })
         .catch(error => {
             alert(JSON.stringify(error.data))
         })
}


