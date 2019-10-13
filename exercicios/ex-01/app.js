// Criando a função 
function carregar() {
    
    // Criando vaiáveis
    let saudacao = document.getElementById('saudacao')
    let imagem = document.getElementById('imagem')
    
    // Pegando hora atual
    let data = new Date()
    let horaAtual = data.getHours()

    // Mensagem ao usuáro
    if (horaAtual >= 0 && horaAtual < 12) {

        // Saudação ao usuário
        saudacao.innerHTML = '<strong>Bom dia!</strong> <br>'
        // Alterando a imagem conforme hora atual
        imagem.src = 'images/tumb-manha.png'
        // Alterando plano de fundo conforme hora atual
        document.body.className = 'bg bg-manha'

    } else if (horaAtual >= 12 && horaAtual <= 18) {

        // Saudação ao usuário
        saudacao.innerHTML = '<strong>Boa tarde!</strong> <br>'
        // Alterando a imagem conforme hora atual
        imagem.src = 'images/tumb-tarde.png'
        // Alterando plano de fundo conforme hora atual
        document.body.className = 'bg bg-tarde'

    } else {

        // Saudação ao usuário
        saudacao.innerHTML = '<strong>Boa noite!</strong> <br>'
        // Alterando a imagem conforme hora atual
        imagem.src = 'images/tumb-noite.png'
        // Alterando plano de fundo conforme hora atual
        document.body.className = 'bg bg-noite'

    }

    // Finalizando saudação ao usuário
    saudacao.innerHTML += `Agora são ${horaAtual} horas.`

}