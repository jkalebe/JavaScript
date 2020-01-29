function trataErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date
    }

}

function imprimirNomeGritado(obj){
    try{//tentar esse bloco
        console.log(obj.nome.toUpperCase() + '!!!')
    }catch(e) { //tratando erro do bloco acima
        trataErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)