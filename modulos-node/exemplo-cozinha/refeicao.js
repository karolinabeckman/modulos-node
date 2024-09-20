// // Na refeicao X, vou comer...
//                                       // ...alimentos pega uma lista e tranforma em elementos
// module.exports = function (refeicao, ...alimentos){
//   if (Array.isArray(alimentos[0])) {
//     alimentos = alimentos[0];
//   }
//   let frase = `Na refeição ${refeicao}, vou comer ${alimentos.join(', ')}.`
//   // console.log(alimentos)
//   // for(let alimento of alimentos){
//   //   if(alimentos.indexOf(alimento) === (alimentos.length - 1)){
//   //     frase += `${alimento}.`
//   //   } else {
//   //     frase += `${alimento}, `
//   //   }
//   // }
//   return frase
// }

// module.exports = {
//   refeicao: "Almoço",
//   vouComer: function(...alimentos){
//     return `Na refeição ${this.refeicao} vou comer ${alimentos}.`
//   }
// }

module.exports = function(refeicao) {
  const vouComer = function(...alimentos){
    console.log(`Na refeição ${refeicao} vou comer ${alimentos}.`)
  }
  return vouComer
}