function Carro(velocidadeMaxima=200, delta=5){
    //atributo privato
    let velocidadeAutal=0;

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAutal + delta <= velocidadeMaxima){
            velocidadeAutal +=delta
        }else {
            velocidadeAutal = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAutal
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())