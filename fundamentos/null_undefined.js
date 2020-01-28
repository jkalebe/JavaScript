a = {name: "kalebe"}
console.log(a)

//atribuição por referência
b = a
console.log(b)
b.name = "jeka"
console.log(a)

c = 3
//atribuição por valores
d = c

//conceito de undefined

let valor //não inicializado
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
