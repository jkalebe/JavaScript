console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())

console.log(['a','b','c','d'].first())

// String.prototype.toString = function(){
//     return 'Lascou tudo'
// }

// console.log('Escola Cod3r'.reverse())

String.prototype.replaceAll = function(vreplace, value){
    return this.split('').map(v =>
        v == vreplace ? v=value:null
    ).join('')
    
}
console.log('String'.replaceAll('S', 'ok'))