
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
                    <div class="itens">  
                    </div>
                `

                main.append(ShowCategorias)  
            }

            // MÉTODO PARA OBTER OS PRODUTOS 

            let itensdiv = document.querySelector('.itens')

            axios.get(url + '/produto')
            .then(response => {
               let itens = response.data;
   
               for (let count in itens) {
                   let ShowProdutos = document.createElement('div')
                   ShowProdutos.setAttribute('class', 'item')
                   ShowProdutos.innerHTML = `
                       <label for="">${itens[count]['name']}</label>
                   `
                   itensdiv.append(ShowProdutos)
               }
            })
            .catch(error => {
             
            })
         })
         .catch(error => {
            alert(JSON.stringify(error))
         })
}

function getProdutos() {

    axios.get(url + '/produto')
         .then(response => {
            let itens = response.data;

            for (let count in itens) {
                let ShowProdutos = document.createElement('div')
                ShowProdutos.setAttribute('class', 'item')
                ShowProdutos.innerHTML = `
                    <label for="">${itens[count]['name']}</label>
                `
                main.append(ShowProdutos)
            }
            return
         })
         .catch(error => {
          
         })
}
