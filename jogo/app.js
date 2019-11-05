let tentativa = document.querySelector('#tentativa')
let tentativas = document.querySelector('#tentativas')
let ultimoResultado = document.querySelector('#ultimoResultado')
let erro = document.querySelector('#erro')
let botao = document.querySelector('#botaoTentar')
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let listaNumeros = []
let contador = 0

debugger;
// console.log(numeroAleatorio)
// console.log(listaNumeros)

function advinharNumero() {
    if (!validarTentativa(Number(tentativa.value))) {
        contador++
        listaNumeros.push(Number(tentativa.value))
        ultimoResultado.innerHTML += `<span>${tentativa.value}</span>`
        tentativas.innerHTML = `Tentativas: ${contador} <br>`
        baixoAlto.innerHTML = ''
        erro.innerHTML = ''
        altoOuBaixo(Number(tentativa.value))
        console.log(listaNumeros)
    }
    acertou(Number(tentativa.value))
    limparInput()
    console.log("Clicou:" , listaNumeros)
}

function validarTentativa(num) {
    erro.innerHTML = ''
    baixoAlto.innerHTML = ''
    if (num < 1 || num > 100 ) {
        erro.innerHTML = 'Numero <strong>inválido</strong>.'
        return true
    } else if (listaNumeros.includes(num)) {
        erro.innerHTML = 'Este número <strong>já foi digitado</strong>.'
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
        baixoAlto.innerHTML = `<strong>Parabéns!</strong> Você acertou.`
        contador = 0
        // listaNumeros = []
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        tentativa.style.display = 'none'
        ultimoResultado.lastChild.style.background = 'var(--cor-padrao)'
        botao.onclick = ''
    } 
    else if (contador == 10) {
        erro.innerHTML = `<br><strong>:(<br><br>Não foi desta vez!</strong><br>Tente novamente.`
        botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
        tentativa.style.display = 'none'
        baixoAlto.innerHTML = ''
        botao.onclick = ''
    }
}

document.addEventListener('keypress', function(e){
    if (e.which == 13 && (listaNumeros.includes(numeroAleatorio) || contador == 10) ) {
        window.location.href = "index.html";
    }
    else if (e.which == 13) {
        advinharNumero()
    }
  }, false);

function limparInput() {
    tentativa.value = ''; 
    tentativa.focus()
}
