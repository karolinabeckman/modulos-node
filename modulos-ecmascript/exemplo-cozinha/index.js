import cozinha from './cozinha/principal.js' // -> É necessário explicitar que quer importar o index, inclusive, podendo mudar o nome do arquivo para principal (no common o nome do arquivo obrigatoriamente deveria ser index e poderia ser importada a pasta)
import receita from './receita.js'
import refeicao from './refeicao.js'
// console.log(cozinha)
// console.log(receita)

// console.log(cozinha.ferver(cozinha.alimentos[2]))
// console.log(receita(cozinha.alimentos, cozinha.cortar, cozinha.assar))
// console.log(receita(["carne", "alface"], cozinha.cortar, cozinha.assar))


console.log(refeicao)
const vouComerNoAlmoco = refeicao('Almoço')
const vouComerNoJantar = refeicao('Jantar')

vouComerNoAlmoco("Arroz", "feijão", "Carne")

vouComerNoJantar("Arroz", "feijão", "Batata")

