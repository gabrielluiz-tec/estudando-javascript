function contar() {

    let inicio = Number(document.querySelector('#inicio').value)
    let fim = Number(document.querySelector('#fim').value)
    let passo = Number(document.querySelector('#passo').value)
    let resultado = document.querySelector('#resultado')

    // Testando...
    // resultado.innerHTML = `${inicio} - ${fim} - ${passo}`
    
    resultado.innerHTML = ''

    if (inicio == 0 || fim == 0 || passo == 0) {
        resultado.innerHTML = '<strong>Erro:</strong> Por pavor preencha todos os campos'
    } else {
        
        for (inicio; inicio <= fim; inicio+=passo) {
            resultado.innerHTML += `${inicio} 😀 `
        }
        resultado.innerHTML += '👍'
    }
}