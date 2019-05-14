//par Nome/Valor
const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Falaa'//contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares chave/valor
const cliente = {
    nome:'Rychard',
    idade:20,
    peso:67,
    endereco:{
        logradouro: 'rua muito legal',
        numero: 321
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
