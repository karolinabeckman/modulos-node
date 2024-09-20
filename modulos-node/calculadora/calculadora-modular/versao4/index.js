const { texto, soma, sub } = require('./calculosBasicos')
const { texto:texto2 , pot, resto } = require('./calculosComplementares')
const { textoDivisao } = require('./calculosDivisao')

let x, y
x = 20
y = 2

console.log(texto)
console.log(soma(x, y))
console.log(sub(x, y))
console.log('\n')
console.log(texto2)
console.log(pot(x, y))
console.log(resto(x, y))
console.log('\n')
console.log(textoDivisao(x, y))