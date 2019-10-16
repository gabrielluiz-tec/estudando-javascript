let resultado = document.querySelector('#resultado')
let analise = document.querySelector('#analise')
let erros = document.querySelector('#erros')
let listaNumeros = []

function adicionarNumero() {
    let numero = Number(document.querySelector('#numero').value)
    if (!validarNumero(numero)) {
        analise.innerHTML = ''
        erros.innerHTML = ''
        listaNumeros.push(numero)
        resultado.innerHTML += `<span>${numero}</<span>`
        console.log(listaNumeros)
    }
}

function validarNumero(num) {
    if (num < 1 || num > 100 ) {
        erros.innerHTML = `Número inválido`
        return true
    }
    else if (listaNumeros.includes(num)) {
        erros.innerHTML = `Número já cadastrado`
        return true
    }
}

function analisarNumero(listaNum) {
    analise.innerHTML = ''
    resultado.innerHTML = ''
    erros.innerHTML = ''
    if (listaNumeros.length == 0) {
        erros.innerHTML = `Nenhum número cadastrado`
    } else {
        // Retorna quantidade de números na lista
        analise.innerHTML = `Lista com <strong>${listaNumeros.length}</strong> números<br>`
        // Retorna o maior valor da lista
        // O novo operador spread "..." é um modo curto de se escrever a solução com apply para retornar o maior valor de um array
        let maior = Math.max(...listaNumeros)
        analise.innerHTML += `O maior valor é: <strong>${maior}</strong><br>`
        // Retorna o menor valor da lista
        let menor = Math.min(...listaNumeros)
        analise.innerHTML += `O menor valor é: <strong>${menor}</strong><br>`
        // Retorna a soma de todos os valores da lista
        let soma = listaNumeros.reduce( (accum, curr) => accum + curr )
        analise.innerHTML += `A soma dos valores é: <strong>${soma}</strong><br>`
        //  Retorna a média dos valores da lista
        let media = soma / listaNumeros.length
        analise.innerHTML += `A média dos valores é: <strong>${media.toFixed(2)}</strong><br>`
        listaNumeros = []
    }
}