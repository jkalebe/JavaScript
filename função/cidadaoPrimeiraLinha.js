// Dunção em Javascript é Fisrt-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1(){ }

//armazenar em uma variavel
const fun2 = function() {}

//Armazenar dentro de array
const array = [function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2, 3))

//Aramazenar em um atributo de objeto
const obj = {}
obj.falar = function(){ return 'Olá'}
console.log(obj.falar())

// Passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando.....')})

//uma função pode retornar ou conter uma função

function soma(a, b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)