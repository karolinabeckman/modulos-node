import kit from "terminal-kit"

const term = kit.terminal

export async function menu(itens){
  let opcoes = {
    style: term.inverse,
    selectedStyle: term.white.bgCyan
  }

  const opcaoSelecionada = await term.singleLineMenu(itens, opcoes).promise
  return opcaoSelecionada.selectedText
}

export async function menuSelecaoUsuario(itens){
  let opcoes = {
    style: term.inverse(),
    selectedStyle: term.white.bgGray
  }

  const selecionada = await term.singleColumnMenu(itens, opcoes).promise
  const id = selecionada.selectedText.split("->")[1].trim()
  return id
}

export async function leInput(enunciado){
  term(`\n\n${enunciado}\n\n`)
  const foiLido = term.inputField().promise
  return foiLido
}

export function textoVerde(texto){
  term.green(`\n\n${texto}\n\n`)
}

export function textoAzul(texto){
  term.blue(`\n\n${texto}\n\n`)
}

export function finaliza(){
  console.log('') // -> Coloquei pra pular linha antes de finalizar a execuçao
  process.exit();
}