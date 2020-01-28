const [a] = [10]
console.log(a)

const [n1, , n3, n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

const b = [10,8,25,35,91]
console.log(b)

const [a1, a2, a3, a4, a5] = b
console.log(a1, a2, a3, a4, a5)

const [, [, nota]] = [[,8,8], [9,6,8]]
console.log(nota)