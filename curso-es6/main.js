// Importando funções
import mensagem, { soma, subtrai } from './funcoes'
// Outra opção usando 'alias'
// import { soma as funcaoSoma, subtrai as funcaoSubtrai} from './funcoes'
// Outra forma de importar várias funções (objeto)
// import * as funcoes from './funcoes'
// console.log(funcoes)
// console.log(funcoes.soma(2, 4))

// Aqui podemos dar um outro nome para função
// Neste caso não precisa das chaves
import funcaoMultiplca from './multiplica'

console.log('soma: ', soma(10, 5))
console.log('sub: ', subtrai(10, 5))
console.log('multi: ', funcaoMultiplca(10, 5))
mensagem()


// Trabalhando com herannça de classes
class List {
    constructor() {
        this.data = []
    }
    add(data) {
        this.data.push(data)
        console.log(this.data)
    }

    count() {
        console.log()
    }
}

// Criando uma nova classe que herda da classe "List"
class TodoList extends List {
    constructor() {
        // Chamando o constructor da classe Pai
        super()

        this.usuario = 'Marcelo Pereira'
    }

    // Criando um novo método
    mostraUsuario() {
        console.log(this.usuario)
    }
}

// Criando uma variável que vai armazenar uma nova TotoList
var MinhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add("Minha tarefa")
}

MinhaLista.mostraUsuario()


/**********************************/
// Métodos estáticos


class Matematica {
    // Método estático
    static soma(n1, n2) {
        return n1 + n2
    }
}

// Neste caso não é necessário dar um "new"
// para poder usar um método da classe
console.log(Matematica.soma(2, 5))

// Vai dar um erro pois este método
// não enxerga o resto da classe
// console.log(soma(2, 5))
