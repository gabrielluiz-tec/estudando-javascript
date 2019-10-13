let data = new Date()
let diaDaSemana = data.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch ( diaDaSemana ) {
    case 0:
        diaDaSemana = 'Domingo'
        break
    case 1:
        diaDaSemana = 'Segunda'
        break
    case 2:
        diaDaSemana = 'Terça'
        break
    case 3:
        diaDaSemana = 'Quarta'
        break
    case 4:
        diaDaSemana = 'Quinta'
        break
    case 5:
        diaDaSemana = 'Sexta'
        break
    case 6:
        diaDaSemana = 'Sábado'
        break
    default:
        console.log('Erro: dia inválido.')
}




console.log(`Hoje é ${diaDaSemana}`)