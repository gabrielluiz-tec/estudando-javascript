// Por padrão um arquivo pode ter apenas um "export defaul"
export default function mensagem() {
    console.log('Olá mundo!')
}


/*
    Exportando funções
    Cada arquivo pode exportar várias funções 
*/ 
export function soma(a, b) {
    return a + b
}

export function subtrai(a, b) {
    return a - b
}



