// Declarando um array
let lista = []
// Declarando um objeto
let pessoa = {}

// No JavaScript ambos são objetos
console.log(typeof(lista))
console.log(typeof(pessoa))

pessoa = {
    nome: "Marcelo",
    cidade: 'Porto Alegre',
    saldo: 1000,
    comprar(val) {
        console.log(`Gastou R$ ${val},00`)
        this.saldo -= val
    }
}

console.log(pessoa)
console.log(`${pessoa.nome} tem R$ ${pessoa.saldo},00`)
pessoa.comprar(450)
console.log(`${pessoa.nome} tem R$ ${pessoa.saldo},00`)