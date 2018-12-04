const escola = "Cod3r"

console.log(escola.charAt(4))//retorna a letra na posição 4
console.log(escola.charCodeAt(3));//pega o valor na tabela ascii

console.log(escola.indexOf('3'));//verifiva se existe o valor dentro da string

console.log(escola.substring(1));//pega toda a string apartir do indice indicado
console.log(escola.substring(0,3));//tbm da pra delimitar ate onde vai a substring

console.log("Escola ".concat(escola).concat("!"));//faz concatenação
console.log("Escola "+escola+"!")//tbm funciona assim

console.log(escola.replace(3, 'e'));//coloca outro caractere no local indicado

console.log("Ana,Maria,Lucia".split(','))//separa e coloca em um array
