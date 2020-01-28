console.log(typeof console)
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    //console.log(nome)
    this.exec = function(){
        console.log('Exec..')
    }
}
const obj2 = new Obj('Kalebe')
console.log(obj2.nome)
obj2.exec()

