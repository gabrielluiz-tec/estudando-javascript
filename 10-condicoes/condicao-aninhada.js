let idade = 12
let msg = ''
let hora = new Date()
let horaAtual = hora.getHours()
let saudacao = ''

// Verifica hora
if (horaAtual < 12) {
    saudacao = 'Bom dia'
} else if (horaAtual <= 18) {
    saudacao = 'Bom tarde'
} else {
    saudacao = 'Boa noite'
}

// Verifica idade
if (idade < 16) {
    msg = 'Você não vota'
} else if (idade < 18 || idade > 65) {
    msg = 'Voto opcional'
} else {
    msg = 'Voto obrigatório'
}

// Imprime mensagem no console
console.log(`${saudacao}! Você tem ${idade} anos. ${msg}. \n`)
console.log(`Data completa: ${hora} \n`)