// Estudando sobre funções me JavaScript

/**
 * "numero" é um parâmetro
 * "(numero % 2 == 0)" é uma ação
 * "return" é um retorno
 * "parOuImpar(110)" é uma chmada
 */

// Função 01
function parOuImpar(numero) {
    if (numero % 2 == 0) {
        console.log(`${numero} é par`)
    } else {
        console.log(`${numero} é ímpar`)
    }
}

// Função 02
function parOuImpar2(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}

// Invocand a função 1 e passando parâmetro
let resultado = parOuImpar(110)

// Invocand a função 2 e passando parâmetro
console.log(parOuImpar2(110))