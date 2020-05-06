Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this))
            newArray.push(this[i])
        
    }
    return newArray
}

const produto = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de plástico', preco: 18.99, fragil: false},
]

console.log(produto.filter(function(p){
    return p.preco>2500
}))

const isFragil = produto => produto.fragil
const isCaro = produto => produto.preco >= 500

const resultado = produto.filter2(isFragil).filter2(isCaro)

console.log(resultado)