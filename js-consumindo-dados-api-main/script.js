// let consultaCEP = fetch('https://viacep.com.br/ws/01001000/json/')
//     .then(resposta => resposta.json())
//     .then(r => {
//         if(r.erro){
//             throw Error("Esse CEP nao existe")
//         }
//         console.log(r)
//     })
//     .catch(erro => console.log(erro))
//     .finally(mensagem => console.log('processamento concluido'))

// console.log(consultaCEP)

async function buscaEndereco() {
    let consultaCEP = await fetch('https://viacep.com.br/ws/01001000/json/')
    let consultaCEPConvertida = await consultaCEP.json()
    console.log(consultaCEPConvertida)
}
buscaEndereco()