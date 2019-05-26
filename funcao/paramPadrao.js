function fun(a,b,c){
    a = a  !== undefined ? a:1
    b = 1 in arguments ? b:1
    c = isNaN(c) ? 1:c//mais segura 
    return a+b+c
}
console.log(fun(1,2,3),fun(0,0,0))

//es2015 
function fun2(a=1,b=1,c=1){
    return a+b+c
}
console.log(fun2(0,0,0),fun2(1,2,3))
