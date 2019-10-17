let tentativa = document.querySelector('#tentativa')
let tentativas = document.querySelector('#tentativas')
let ultimoResultado = document.querySelector('#ultimoResultado')
let botao = document.querySelector('#botaoTentar')
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let listaNumeros = []
let contador = 0

console.log(numeroAleatorio)

function advinharNumero() {
    if (!validarTentativa(Number(tentativa.value))) {
        contador++
        listaNumeros.push(Number(tentativa.value))
        ultimoResultado.innerHTML += `<span>${tentativa.value}</span>`
        tentativas.innerHTML = `Tentativas: ${contador} <br>`
        baixoAlto.innerHTML = ''
        console.log(listaNumeros)
        altoOuBaixo(Number(tentativa.value))
    }
    acertou(Number(tentativa.value))
    limparInput()
}

function validarTentativa(num) {
    if (num < 1 || num > 100 ) {
        baixoAlto.innerHTML = 'Numero inválido.'
        return true
    } else if (listaNumeros.includes(num)) {
        baixoAlto.innerHTML = 'Este número <strong>já foi digitado</strong>.'
        return true
    }
}

function altoOuBaixo(num) {
    if (num < numeroAleatorio && num > 0 || !listaNumeros.includes(num)) {
        baixoAlto.innerHTML = 'Digite um número <strong>maior</strong>.'
    } else if (num > numeroAleatorio && num <= 100 || !listaNumeros.includes(num)) {
        baixoAlto.innerHTML = 'Digite um número <strong>menor</strong>.'
    }
}

function acertou(num) {
    if (num == numeroAleatorio) {
        tentativas.innerHTML = ''
        ultimoResultado.innerHTML = ''
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        baixoAlto.innerHTML = `<strong>Parabéns!</strong><br>Você acertou em <strong>${contador}</strong> tentativas.`
        contador = 0
        listaNumeros = []
        return true
    } else if (contador == 10) {
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        tentativas.innerHTML = ''
        ultimoResultado.innerHTML = ''
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        baixoAlto.innerHTML = `<strong>Que pena!</strong><br>Tente novamente.`
    }
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){ advinharNumero() }
  }, false);

function limparInput() {
    tentativa.value = ''; 
    tentativa.focus()
}