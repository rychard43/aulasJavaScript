const imprimirResultado = function (nota){
    switch(Math.floor(nota)){
        case 10: //ignorando o 10 e executa o do 9 e para por conta do break
        case 9:
            console.log("Aprovado Com Honra :)")
            break
        case 8: case 7://pode por um na frente do outro (no cso de terem q executar a mesma ação)
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado :(")
            break
        default:
            console.log("Nota Inválida")
    }
}

imprimirResultado(10)