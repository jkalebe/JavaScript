//02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quantoao tamanho de seus lados. 
//(Neste exemplo deve-se abstrair as condições matemáticas de existência de umtriângulo).

function classificTriagunlo(a,b,c){
    if(a==b && a==c)
        return 'Equilatero'
    else if(a==b || a==c || b == c)
        return 'Isósceles'
    else
        return 'Escaleno'        
}

console.log(classificTriagunlo(2,2,2))
console.log(classificTriagunlo(2,2,3))
console.log(classificTriagunlo(2,3,4))