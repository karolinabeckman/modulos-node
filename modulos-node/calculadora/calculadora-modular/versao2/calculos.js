const texto = "Sou o módulo cálculo 2"

function soma(a, b){
  return a + b
}

function sub(a, b){
  return a - b
}
// module.exports = {
//   texto:texto,
//   soma:soma,
//   sub: sub
// } // forma completa de definir, como serão os mesmos nomes usa-se a forma resumida abaixo

module.exports = {
  texto, soma, sub
}