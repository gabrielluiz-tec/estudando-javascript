
let contador = 0

let tentativas = document.querySelector('#tentativas')
let ultimoResultado = document.querySelector('#ultimoResultado')
let listaNumeros = []
// Gera um número aleatório entre "1 e 100"
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
// Mostra no console o número gerado pelo sistema
console.log(`Número Aleatório: ${numeroAleatorio}`)

let botao = document.querySelector('#botaoTentar')


function advinhaNumero() {
    let tentativa = Number(document.querySelector('#tentativa').value)

    if (tentativa < 1 || tentativa > 100) {
        baixoAlto.innerHTML = 'Por favor,<br>digite um número entre <strong>1</strong> e <strong>100</strong>.'
    } else {
        if (tentativa == numeroAleatorio) {
            contador++
            tentativas.innerHTML = ''
            ultimoResultado.innerHTML = ''
            botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
            baixoAlto.innerHTML = `<strong>Parabéns!</strong><br>Você acertou em <strong>${contador}</strong> tentativas.`
            contador = 0
            listaNumeros = []
        } else {
            if (listaNumeros.includes(tentativa)) {
                baixoAlto.innerHTML = 'Este número já foi digitado.'
                console.log(`${tentativa} está no array`)
            } else {
                if (tentativa < numeroAleatorio) {
                    baixoAlto.innerHTML = 'BAIXO. Digite um número maior.'
                } else {
                    baixoAlto.innerHTML = 'ALTO. Digite um número menor.'
                }
                contador++
                tentativas.innerHTML = `Tentativas: ${contador} <br>`
                ultimoResultado.innerHTML += `<span>${tentativa}</span>`
                listaNumeros.push(tentativa)

                if (contador == 10) {
                    botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
                    tentativas.innerHTML = ''
                    ultimoResultado.innerHTML = ''
                    botao.innerHTML = '<a href="index.html">Jogar novamente</a>'
                    baixoAlto.innerHTML = `<strong>Que pena!</strong><br>Tente novamente.`
                }
            }
        }
        console.log(listaNumeros)
        console.log(`Contador: ${contador}`)
        // console.log(`Número Aleatório: ${numeroAleatorio}`)
    }
} // Fim da função

// Verifica se tecla enter foi pressionada
document.addEventListener('keypress', function(e){
    if(e.which == 13){
        advinhaNumero()
    }
  }, false);
