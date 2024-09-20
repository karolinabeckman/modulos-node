// module.exports = {
//   texto: "Sou o módulo Cálculos Complementares",
//   pot: function(a, b){
//     return a**b
//   },
//   resto: function(a, b){
//     return a % b
//   }
// }

const texto = "Sou o módulo Cálculos Complementares"

function pot(a, b){
  return a**b
}

function resto(a, b){
  return a % b
}

module.exports = { texto, pot, resto }