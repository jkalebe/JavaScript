const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'
const template = `Olá
    ${nome}!`
console.log(concatenacao, template);

//expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

const soma = (n1,n2) => n1 + n2
console.log(`Soma: 5 + 7 = ${soma(5,7)}`)