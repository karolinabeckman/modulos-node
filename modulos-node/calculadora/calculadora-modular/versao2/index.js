// // const calculos = require('./calculos')
// // console.log(calculos)

// // importando como destructuring
// const {texto, soma, sub} = require('./calculos')

// Também pode ser importado duas vezes e usado tanto como objeto ou como destructuring
const calculos = require('./calculos') // -> importa o objeto

const {texto, soma, sub} = calculos // -> realiza o desrtructurig do objeto

let x, y
x = 10
y = 5

//modo utilizando destructuring
console.log(soma(x, y))
console.log(sub(x, y))
console.log(texto)

// // modo importando objeto
// console.log(calculos.soma(x, y))
// console.log(calculos.sub(x, y))
// console.log(calculos.texto)
