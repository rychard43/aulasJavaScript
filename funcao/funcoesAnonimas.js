const soma = function(x,y){
    return x+y
}

const imprimirResultado = function(a,b,operacao = soma){
    console.log(operacao(a,b))
}

imprimirResultado(2,2)
imprimirResultado(3,4,soma)
imprimirResultado(3,4,function(x,y){
    return x-y
})
imprimirResultado(2,2,(x,y)=>x*y)