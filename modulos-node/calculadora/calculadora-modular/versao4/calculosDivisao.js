const { resto } = require('./calculosComplementares') // Só precisa importar o resto e não tudo que está dentro do doc.

function div(a, b){
  return a / b
}

// Só preciso exportar o texto Divisão, pois não será usada a função de divisão no index.js.
// A função de divisão está disponível apenas nesse arquivo
exports.textoDivisao = function (a, b){
  return `A divisão de ${a} por ${b} é ${div(a,b)} e o resto é ${resto(a,b)}`
}

