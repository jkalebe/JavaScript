function compras(trabalho1, trabalho2){
    const compraSorvete =   trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const materSaudade = ! compraSorvete
    
    //no ES2015, novo recurso de criar objeto, como prosegue na linha a seguir
    return {compraSorvete, comprarTv50, comprarTv32, materSaudade}
    //nome da constante é a chave do objeto
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))