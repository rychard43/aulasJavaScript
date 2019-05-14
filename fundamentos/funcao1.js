//função sem retorno 
//function para determinar q é uma função
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)

//função com retorno 
                 //se n passar o "b" por padrão ele recebe 0 
function soma(a, b=0){
    return a+b
}

console.log(soma(4))
console.log(soma(4,3))