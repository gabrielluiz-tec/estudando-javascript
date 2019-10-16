let lista = [3, 7, 99, 8]

// Desta forma imprime os colchetes "[]"
console.log(lista)

// Desta forma imprime sem os colchetes "[]"
console.log(`Imprimindo a lista: ${lista}`)

// Inserindo novo valor no array
lista[4] = 21
lista[10] = 'casa'

// Usando o método interno "push"
// Adiciona o valor na última posição do array
lista.push(333)

console.log(`Imprimindo a lista: ${lista}`)
console.log(`Imprimindo um elemento: ${lista[1]}`)

// Descobrindo o tamanho do array com o "atributo - length"
// Atenção: não vai "parenteses" pois é um método
console.log(`Tamanho do array: ${lista.length}`)

// Ordenando o array com o método "sort()"
lista.sort()

console.log(`Imprimindo a lista ordenada: ${lista}`)

// Imprimindo array com "for"
for (let pos in lista) {
    console.log(`${pos} - ${lista[pos]}`)
}

// Verificar se valor existe no array
console.log(lista.includes('casa'))

// Verificar se valor existe no array
// Retorna a posição do valor no array
console.log(lista.indexOf('casa'))

// Verificar se valor existe no array
// Retorna "-1" se não encontrar o valor no array
console.log(lista.indexOf('café'))