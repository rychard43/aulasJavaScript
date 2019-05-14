console.log(Math.ceil(6.1))//ceil arredonda pra cima

const obj1 = {}
obj1.nome = 'Papel'

function Obj(nome){
    this.nome=nome
} 

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)