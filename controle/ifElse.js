function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('aprovado com '+nota)
    }
}

soBoaNoticia(9.7)

const imprimirResultado = function(nota){
    if(nota >= 7 ){
        console.log('aprovado!!')
    }else{
        console.log('reprovdo !!! :(')
    }
}

imprimirResultado(7)