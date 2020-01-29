let num1 = 1
let num2 = 2

//pre-fixada
num1++;
console.log(num1);
//não pre-fixada
--num1;
console.log(num1)

//num2 é decrementado depois da comparação
console.log(++num1 === num2--)
console.log(num1 === num2)