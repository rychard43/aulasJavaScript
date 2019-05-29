//função construtora
function Produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () =>{
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta',7.99,0.15)
const p2 = new Produto('NoteBook',2998.99,0.25)

console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

//função Factory
function criarFuncionario(nome, salarioBsae,faltas){
    return {
        nome,
        salarioBsae,
        faltas,
        getSalario(){
            return (salarioBsae/30)*(30-faltas)
        }
    }
}

const f1 = criarFuncionario('Rychard',15000,2)
const f2 = criarFuncionario("Ricardo",8000,5)

console.log(f1.getSalario(),f2.getSalario())

//Object.create
const objeto = Object.create(null)
objeto.nome = "Alguma Coisa"
console.log(objeto)