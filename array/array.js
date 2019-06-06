let aprovados = new Array('Rychard','Bia','Carlos')

console.log(aprovados)

aprovados = ['Carlos','Bia','Rychard']
console.log(aprovados[0])

aprovados[3] = 'Ana'
aprovados.push('Ricardo')

console.log(aprovados, `numero de dados: ${aprovados.length}`)

delete aprovados[1]
aprovados.sort()
console.log(aprovados)