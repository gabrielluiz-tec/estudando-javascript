//**************************************** */
// REST "..."

const usuario = {
    nome: 'Marcelo',
    cidade: 'Porto Alegre',
    estado: 'RS',
    pais: 'Brasil'
}

// A variável 'resto' assumiu todas as oitras propriedades do objeto
// Aqui aplicamos desestruturação
const { nome, ...resto } = usuario

console.log(nome, resto)


//********************************************* */
// Exemplo com vetores

const lista = [1, 2, 3, 4, 5, 6, 7, 8]

const [ a, b, ...c ] = lista

console.log(a)
console.log(b)
console.log(c)

//*************************************** */
// Um exemplo utilizando funções

// Usando ES5
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(2, 4))

// Usando ES6
/* O operador rest "..." vai converter os parâmetros enviados 
   em formato de array */
function somaNumeros(...numeros) {
    return numeros.reduce((total, proximo) => total + proximo)
}
// Imprime um array de números
console.log('Total: ', somaNumeros(2, 4, 5, 6))



//****************************************** */
// SPREAD OPERTOR
const lista1 = [1, 2, 3]
const lista2 = [4, 5, 6]

const lista3 = [...lista1, ...lista2]

console.log(lista3)


// Um exemplo utilizando objeto
const aluno1 = {
    nome: 'Marcelo',
    cidade: 'Porto Alegre',
    estado: 'RS'
}
const aluno2 = { ...aluno1, nome: 'João' }
console.log(aluno2)

// 
