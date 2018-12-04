const nome = 'rychard'

const concatenação = 'ola ' + nome + '!'

//fica entre ``
const tamplate = `

     ola
     ${nome}!`

console.log(concatenação, tamplate)

//expressões...
console.log(`2+2 = ${2+2}`)

//com função
const up = texto => texto.toUpperCase()//função para colocar letra maisucula
console.log(`Ei... ${up('cuidado')}!`)

