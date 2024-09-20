//O export antes da declaração exporta de modo individual

export const texto = "Sou o módulo cálculo"
export function soma(a, b){
  return a + b
}

export function sub(a, b){
  return a - b
}

// O export default exporta o conjunto inteiro
export default { texto, soma, sub }

