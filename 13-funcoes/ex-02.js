// Função soma 01
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(3, 6))


// Função soma 02
/* 
    Aqui eu defino um valor padrão para as variáveis
    Caso o número não seja informado por parâmentro
    o valor padrão será "0"
*/

function soma(n1 = 0, n2 = 0) {
    return n1 + n2
}

console.log(soma(3))