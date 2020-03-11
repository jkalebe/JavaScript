//04)​Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir
// o resultadoe o resto da divisão destes dois valores.

function operacao(dividendo, divisor){
    return `Divisão: ${Math.floor(dividendo/divisor)} Resto: ${dividendo%divisor}`
}

console.log(operacao(3,2))