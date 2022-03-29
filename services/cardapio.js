
// MÉTODO PARA OBTER AS CATEGORIAS

function getCategorias() {
    let main = window.document.querySelector('main')

    axios.get(url + '/categoria')
         .then(response => {
            let categorias = response.data;

            for (let count in categorias){
                let ShowCategorias = document.createElement('div')
                ShowCategorias.setAttribute('class', 'categorias')
                ShowCategorias.setAttribute('onclick', `abreProdutos(${categorias[count]['id']})`)
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
    axios.get(url + '/produto')
         .then(response => {
            let section = document.querySelector('section')
            let produtos = response.data;
            let id = localStorage.getItem('id')

            for (let count in produtos) {
                if (produtos[count]['categoria_id'] == id) {
                let ShowProdutos = document.createElement('div')
                ShowProdutos.setAttribute('class', 'produto')
                ShowProdutos.innerHTML = `
                    <label class="nome">${produtos[count]['name']}</label>
                    <label class="preco">${produtos[count]['preco']}</label>
                `
                section.append(ShowProdutos)
                }
            }
         })
         .catch(error => {
            alert(JSON.stringify(error.data))
         })         
}


