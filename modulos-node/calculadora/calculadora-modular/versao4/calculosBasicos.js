// module.exports = {
//   texto: "Sou o módulo Cálculos Básicos",
//   soma: function(a, b){
//     return a + b
//   },
//   sub: function(a, b){
//     return a - b
//   }
// }

const info = "Sou o módulo Cálculos Básicos"

function soma(a, b){
  return a + b
}

function sub(a, b) {
  return a - b
}

module.exports = { 
  texto: info,
  soma, 
  sub 
}