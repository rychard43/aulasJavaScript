const pessoa = {
    nome : 'Ana',
    idade : 5,
    endereco : {
        logradouro : 'Rua ABC',
        numero : 1000
    }
}
//operador de desestruturação
const { nome, idade } = pessoa
console.log(nome , idade)

//estraindo para e adcionando em outras variaveis 
const {nome : n , idade : i} = pessoa
console.log(n,i)

const{endereco : {logradouro,numero}} = pessoa
console.log(logradouro,numero)
