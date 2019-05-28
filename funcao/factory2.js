function criarProduto(nome,preco,desconto=0.1){
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto('NoteBook',2500.50,0.5))
console.log(criarProduto('Redmi 5',1000.00))