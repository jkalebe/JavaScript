function Aula(nome, videoId) {
    this.nome = nome
    this.videoId = videoId
}
// new cria e aponta para o prototipo da funcção
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 486)
console.log(aula1, aula2)

//simulando new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)