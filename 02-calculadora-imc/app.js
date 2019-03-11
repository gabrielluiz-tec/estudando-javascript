// Linha de comentário no JavaScritp

// Declarando variáveis
var peso = 69
var altura = 1.69

// Estrutura condifional IF e ELSE
if(altura != 0) {
    var imc = peso / (altura * altura);
    // Imprimindo resultado no console do navegador
    console.log(imc)
}

else {
    // Imprimindo mensagem de erro se altura = 0
    console.log('Erro: A altura deve ser diferente de zero.')
}