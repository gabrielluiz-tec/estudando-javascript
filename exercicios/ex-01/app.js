// Criando a função 
function carregar() {
    
    // Criando vaiáveis
    let saudacao = document.getElementById('saudacao')
    let imagem = document.getElementById('imagem')
    
    // Pegando hora atual
    let data = new Date()
    // let horaAtual = data.getHours()
    let horaAtual = 1

    // Mensagem ao usuáro
    if (horaAtual >= 0 && horaAtual < 12) {

        saudacao.innerHTML = '<strong>Bom dia!</strong> <br>'
        imagem.src = 'images/tumb-manha.png'
        document.body.className = 'bg bg-manha'

    } else if (horaAtual >= 12 && horaAtual <= 18) {

        saudacao.innerHTML = '<strong>Boa tarde!</strong> <br>'
        imagem.src = 'images/tumb-tarde.png'
        document.body.className = 'bg bg-tarde'

    } else {

        saudacao.innerHTML = '<strong>Boa noite!</strong> <br>'
        imagem.src = 'images/tumb-noite.png'
        document.body.className = 'bg bg-noite'

    }

    // FInalizando saudação ao usuário
    saudacao.innerHTML += `Agora são ${horaAtual} horas.`

}