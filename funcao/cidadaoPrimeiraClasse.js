//função literal
function fun1 (){

}

//armazenar em uma variavel
const fun2 = function (){

}

//armazenar em uma array
const array = [function(a,b){return a+b},fun1,fun2]
console.log(array[0](2,3))

//armazenar em um atributo de um objeto
const obj = {}
obj.falar = function(){return 'ola'}
console.log(obj.falar())

//passar uma função como parametro
function run(fun){
    fun()
}
run(function(){return console.log('executando...')})

//pode retornar ou conter outra função
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)