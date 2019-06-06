const produtos = [
    {nome : 'NoteBook',preco: 2499,fragil:true},
    {nome : 'iPed Pro',preco: 4199,fragil:true},
    {nome : 'Copo de Vidro',preco: 12.49,fragil:true},
    {nome : 'Compo de Platico',preco: 18.99,fragil:false}
]

const produtoFragil = produto => produto.fragil
const produtoCaro = produto => produto.preco >= 500

console.log(produtos.filter(produtoFragil).filter(produtoCaro))