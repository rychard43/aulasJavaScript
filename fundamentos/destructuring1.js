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