const notas = [6.7, 8.5, 8, 9.1, 7.7]

for(i in notas){
    console.log(`value de i: ${i} e notas[${i}]: ${notas[i]}`)
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}