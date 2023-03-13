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

async function buscaEndereco(cep) {
    try{
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPConvertida = await consultaCEP.json()
        if(consultaCEPConvertida.erro){
            throw Error('CEP nao existente')
        }
        console.log(consultaCEPConvertida)
        return consultaCEPConvertida
    } catch (erro){
        console.log(erro)
    }  
}

// let ceps = ['01001000','01001001']
// let conjuntoDeCeps = ceps.map(valores => buscaEndereco(valores))
// Promise.all(conjuntoDeCeps).then(respostas => console.log(respostas))