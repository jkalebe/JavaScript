obj = {
    name:'Kalebe',
    idade:22,
    cidade:'Breu Branco'
}

function printData({name, idade, cidade}){
    console.log('Me chamo: ' + name)
    console.log('Tenho ' + idade + ' anos')
    console.log('Moro na cidade de ' + cidade)
}

printData(obj)

const array = [35,45,55,65,75,85,95,100]
const [nq1,nq2,nq3,nq4,nq5] = array
console.log(nq1,nq2,nq3,nq4)

function rand({firts, second}){
    const valor = Math.random() * (firts - second) + second
    return Math.floor(valor)
}

console.log(rand({firts:95, second:80}))