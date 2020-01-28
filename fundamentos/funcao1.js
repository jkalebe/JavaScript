// Função sem retorno em JavaScript
function imprimirFolha(a, b){
    console.log(a + b)
}

imprimirFolha(3, 2)
imprimirFolha(2)
imprimirFolha(2, 10, 4, 5, 6, 7, 8)
imprimirFolha()

// Função com retorno
function Soma(a, b=0){
    return a + b
}

console.log(Soma(2,3))
console.log(Soma(2))