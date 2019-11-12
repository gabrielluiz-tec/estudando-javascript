// A palavra 'async' garante que a função irá retornar uma 'promisse'
// async function getCompany() {
//     return 'Google'
// }

// Para usar a função podemos 'resolve-la' usando a forma tradicional 'promise/callback'
// Vamos utilizar a keyword 'then'
// getCompany().then( (res) => console.log('res =>', res) )


// *************************************************************
// Exemplo 2
function serverRequest() {
    var promise = new Promise( (resolve, reject) => {
        setTimeout(() => reject('mensagem de erro'), 3000)
    })
    return promise;
}
  
async function getCompany() {
    let companyPromise = serverRequest();
    try{
        let companyName = await companyPromise;
        console.log('companyName', companyName);
        // handle success
    } catch(error) {
        console.log('error', error);
        // handle error
    }
}
getCompany();

