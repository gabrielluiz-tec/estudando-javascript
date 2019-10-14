function verificar() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNascimento = document.querySelector('#txtano').value
    let sexo = document.getElementsByName('radsex')
    let resultado = document.querySelector('#res p')
    let genero = sexo[0].checked ? 'Homem' : 'Mulher'
    let idade = anoAtual - anoNascimento
    let imagem = document.createElement('img')
    if (idade == '' || idade <= 0 || idade > 130) {
        resultado.innerHTML = `Por favor digite um ano válido!`
    } else {
        if (idade < 10) {
            if (genero == 'Homem') {
                imagem.setAttribute('src', 'imagens/crianca-m.png')
            } else {
                imagem.setAttribute('src', 'imagens/crianca-f.png')
            }
        } else if (idade < 21) {
            if (genero == 'Homem') {
                imagem.setAttribute('src', 'imagens/jovem-m.png')
            } else {
                imagem.setAttribute('src', 'imagens/jovem-f.png')
            }
        } else if (idade < 50) {
            if (genero == 'Homem') {
                imagem.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                imagem.setAttribute('src', 'imagens/adulto-f.png')
            }
        } else {
            if (genero == 'Homem') {
                imagem.setAttribute('src', 'imagens/idoso-m.png')
            } else {
                imagem.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
            resultado.style.textAlign = 'center'
            resultado.innerHTML = `${genero} com <strong>${idade} anos</strong>. <br><br>`
            resultado.appendChild(imagem)
    }
} 