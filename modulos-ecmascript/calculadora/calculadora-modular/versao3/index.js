// // Sem destructuring
// import basicos from './calculosBasicos.js'
// import complementares from './calculosComplementares.js'
// import d from './calculosDivisao.js'

// let x, y
// x = 2
// y = 3

// console.log(basicos.texto)
// console.log(basicos.soma(x, y))
// console.log(basicos.sub(x, y))
// console.log('\n')
// console.log(complementares.texto)
// console.log(complementares.pot(x, y))
// console.log(complementares.resto(x, y))
// console.log('\n')
// console.log(d.divX(x, y))


import { texto, soma, sub } from './calculosBasicos.js'
import { texto as texto2 , pot, resto } from './calculosComplementares.js' // utiliza-se o 'as' para fornecer um apelido a variável
import textoDivisao  from './calculosDivisao.js' // Quando uma função é exportada por padrão não recebe chaves

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