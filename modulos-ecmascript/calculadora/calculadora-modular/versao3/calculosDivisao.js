import { resto } from './calculosComplementares.js' // Só precisa importar o resto e não tudo que está dentro do doc.

function div(a, b){
  return a / b
}

// Pode exportar a função por padrão
export default function textoDivisao(a, b){
  return `A divisão de ${a} por ${b} é ${div(a,b)} e o resto é ${resto(a,b)}`
}

// export default { divX:textoDivisao} //exporta com outro nome

