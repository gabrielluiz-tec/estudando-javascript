var listaDeTarefas = document.querySelector('ul')
var input = document.querySelector('input')
var botaoAddTarefa = document.querySelector('button')

// Busca lista no 'Lcal Storage' e se não encontrar, retorna um array vazio
var tarefas = JSON.parse(localStorage.getItem('lista_tarefas')) || [];

// Renderiza a lista de tarefas
function listarTarefas() {
    listaDeTarefas.innerHTML = ''
    if (tarefas.length > 0) {
        for ( let tarefa of tarefas) {
            // Criando a 'li' da tarefa
            var novaTarefa = document.createElement('li')
            var textoTarefa = document.createTextNode(tarefa)
            novaTarefa.appendChild(textoTarefa)

            // Criando o botão 'excluir tarefa'
            var botaoExcluir = document.createElement('button')
            var textoBotaoExcluir = document.createTextNode('x')
            botaoExcluir.appendChild(textoBotaoExcluir)
            novaTarefa.appendChild(botaoExcluir)

            // Buscando tarefa pelo índice
            var posicao = tarefas.indexOf(tarefa)
            botaoExcluir.setAttribute('onclick', `deletarTarefa(${posicao})`)
            
            // Imprime nova tarefa na lista
            listaDeTarefas.appendChild(novaTarefa)
        }
    } else {
        listaDeTarefas.innerHTML += `<li>Nenhuma tarefa pendente.</li>`
    }
}

// Invocando a função para gerar a lista de tarefas
listarTarefas()

// Adiciona novas tarefas na lista
function addTarefa() {
    var novaTarefa = input.value
    
    tarefas.push(novaTarefa)
    input.value = ''
    listarTarefas()
    salvarLocal()
}

// Botão que invoca a função 'addTarefa()'
botaoAddTarefa.onclick = addTarefa

// Deleta tarefa da lista
function deletarTarefa(posicao) {
    tarefas.splice(posicao, 1)
    listarTarefas()
    salvarLocal()
}

function salvarLocal() {
    localStorage.setItem('lista_tarefas', JSON.stringify(tarefas))
}
