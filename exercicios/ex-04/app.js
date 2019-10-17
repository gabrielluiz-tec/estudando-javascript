let numero = document.querySelector('#numero')
let resultado = document.querySelector('#resultado')
let analise = document.querySelector('#analise')
let erros = document.querySelector('#erros')
let listaNumeros = []

function adicionarNumero() {
    if (!validarNumero(numero.value)) {
        analise.innerHTML = ''
        erros.innerHTML = ''
        listaNumeros.push(Number(numero.value))
        resultado.innerHTML += `<span>${numero.value}</<span>`
        numero.value = ''
        numero.focus()
    }
}

function validarNumero(num) {
    if (num < 1 || num > 100 ) {
        erros.innerHTML = `Número inválido`
        numero.value = ''
        numero.focus()
        return true
    }
    else if (listaNumeros.includes(num)) {
        erros.innerHTML = `Número já cadastrado`
        numero.value = ''
        numero.focus()
        return true
    }
}

function analisarNumero(listaNum) {
    analise.innerHTML = ''
    resultado.innerHTML = ''
    erros.innerHTML = ''
    if (listaNumeros.length == 0) {
        erros.innerHTML = `Nenhum número cadastrado`
        numero.value = ''
        numero.focus()
    } else {
        analise.innerHTML = `Lista com <strong>${listaNumeros.length}</strong> números<br>`
        let maior = Math.max(...listaNumeros)
        analise.innerHTML += `O maior valor é: <strong>${maior}</strong><br>`
        let menor = Math.min(...listaNumeros)
        analise.innerHTML += `O menor valor é: <strong>${menor}</strong><br>`
        let soma = listaNumeros.reduce( (accum, curr) => accum + curr )
        analise.innerHTML += `A soma dos valores é: <strong>${soma}</strong><br>`
        let media = soma / listaNumeros.length
        analise.innerHTML += `A média dos valores é: <strong>${media.toFixed(2)}</strong><br>`
        listaNumeros = []
    }
}

// Verifica se tecla enter foi pressionada
document.addEventListener('keypress', function(e){
    if(e.which == 13){
        adicionarNumero()
    }
  }, false);
