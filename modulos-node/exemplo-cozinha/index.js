// const acoes = require('./cozinha/acoesCozinhar')
// const { alimentos } = require('./cozinha/alimentos')
// console.log(acoes.cozinhar(alimentos[1]))


const cozinha = require('./cozinha')
const receita = require('./receita')
// console.log(cozinha)
// console.log(receita)

// console.log(cozinha.ferver(cozinha.alimentos[2]))
// console.log(receita(cozinha.alimentos, cozinha.cortar, cozinha.assar))
// console.log(receita(["carne", "alface"], cozinha.cortar, cozinha.assar))

// const refeicao = require('./refeicao')
// console.log(refeicao)

// console.log(refeicao.vouComer(cozinha.alimentos))

// const refeicao = require('./refeicao')
// console.log(refeicao.vouComer("Arroz", "feijão", "Carne"))
// refeicao.refeicao = "Jantar"
// console.log(refeicao.vouComer("Arroz", "feijão", "Batata"))
// console.log(refeicao.vouComer("Arroz", "feijão", "Batata"))

// const refeicao = require('./refeicao')("Almoço")
// // console.log(refeicao)
// refeicao("Arroz", "feijão", "Carne")

// const refeicao2 = require('./refeicao')("Jantar")
// // console.log(refeicao2)
// refeicao2("Arroz", "feijão", "Batata")

const refeicao = require('./refeicao')
const r = refeicao("Almoço")
// console.log(r)
r("Arroz", "feijão", "Carne")

const r2 = refeicao("Jantar")
// console.log(r2)
r2("Arroz", "feijão", "Batata")