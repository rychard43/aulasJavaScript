const valores = [7.7, 6.9, 8.8, 9.6]
console.log(valores[0], valores[3])

valores[4] = 10//consegue add valores no array 

console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')//adiciona valores ao array
console.log(valores)

console.log(valores.pop())//tira o ultimo valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)