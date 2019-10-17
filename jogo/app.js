let tentativa = document.querySelector('#tentativa')
let tentativas = document.querySelector('#tentativas')
let ultimoResultado = document.querySelector('#ultimoResultado')
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let listaNumeros = []
let contador = 0

let botao = document.querySelector('#botaoTentar')

console.log(numeroAleatorio)

function advinharNumero() {
    if (!validarTentativa(Number(tentativa.value))) {
        contador++
        listaNumeros.push(Number(tentativa.value))
        ultimoResultado.innerHTML += `<span>${tentativa.value}</span>`
        tentativas.innerHTML = `Tentativas: ${contador} <br>`
        baixoAlto.innerHTML = ''
        console.log(listaNumeros)
    }
    acertou(Number(tentativa.value))
    altoOuBaixo(Number(tentativa.value))
    limparInput()
}

function validarTentativa(num) {
    if (num < 1 || num > 100 ) {
        baixoAlto.innerHTML = 'Numero inválido.'
        return true
    }
    if (listaNumeros.includes(num)) {
        baixoAlto.innerHTML = 'Este número já foi digitado.'
        return true
    }
}

function acertou(num) {
    if (num == numeroAleatorio) {
        contador++
        tentativas.innerHTML = ''
        ultimoResultado.innerHTML = ''
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        baixoAlto.innerHTML = `<strong>Parabéns!</strong><br>Você acertou em <strong>${contador}</strong> tentativas.`
        contador = 0
        listaNumeros = []
        return true
    }

    else if (contador == 10) {
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        tentativas.innerHTML = ''
        ultimoResultado.innerHTML = ''
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        baixoAlto.innerHTML = `<strong>Que pena!</strong><br>Tente novamente.`
    }
}

function altoOuBaixo(num) {
    if (num < numeroAleatorio && num > 0) {
        baixoAlto.innerHTML = 'BAIXO. Digite um número maior.'
    } else if (num > numeroAleatorio && num <= 100) {
        baixoAlto.innerHTML = 'ALTO. Digite um número menor.'
    }
}



document.addEventListener('keypress', function(e){
    if(e.which == 13){ advinharNumero() }
  }, false);

function limparInput() {
    tentativa.value = ''; 
    tentativa.focus()
}