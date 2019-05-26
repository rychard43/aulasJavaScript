const notas = [6.7,7.4,9.8,8.1,7.7]
    //let pra ser acessado so no for
for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome :'Rychard',
    sobrenome : 'Souza',
    idade : '20',
    peso : '65'
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}