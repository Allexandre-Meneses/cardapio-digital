

function getCardapio() {
    axios.get(url + '/produto')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        alert(JSON.stringify(error))
    })
}
