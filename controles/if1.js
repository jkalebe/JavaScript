function soBoaNoticias(nota){
    if(nota >= 7){
        console.log("Aprovado com" + nota)
    }
}

soBoaNoticias(8.1)
soBoaNoticias(6.1)

function seForVerdadeiroEuFalo(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1,2])
seForVerdadeiroEuFalo({})