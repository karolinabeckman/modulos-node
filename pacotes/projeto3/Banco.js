import fs from "fs"
import { v4 as uuidv4 } from 'uuid'

// // let dadosManipulaveis = [] // -> Vai aceitar objetos no formato {nome, id}
let dadosManipulaveis = _carregarValores()

// // SEM UUID
// let ultimoIdRegistrado = dadosManipulaveis[dadosManipulaveis.length -1]?.id ?? -1
// // console.log(ultimoIdRegistrado)
// let idGlobal = ultimoIdRegistrado + 1

function _carregarValores(){ // -> O underline na frente é usado como uma conveção para funções que não precisarão ser exportadas
  //Pega os dados em formato JSON
  const dadosJSON = fs.readFileSync("banco.json", "utf-8")
  const dados = JSON.parse(dadosJSON) // Tranformando do formato JSON para o formato de array
  return dados
}

export function persistirValores(){
  // JSON.stringify serve para transforma um dado e json (só funciona com listas??)
  const dadosJSON = JSON.stringify(dadosManipulaveis, null, 4) // -> Parametros: 1º é o dado a ser tranformado, 2º função de manipulação do JSON, 3º quantidade de espaçamento
  // Para escrever os dados no arquivo também será utilizado o módulo fs
  fs.writeFileSync("banco.json", [] + dadosJSON, "utf-8") // Aqui é usado o writeFile em vez do appenfile para que as informaçòes não fiquem duplicadas no banco
}

// export function salvar(nome, id){
//   if(id && id <= idGlobal){ // A comparação id <= idGlobal é para verificar se tem id (mas não entendi, pois o para mim o primeiro argumento já verifica se tem id???)
//     const indice = dadosManipulaveis.findIndex((obj) => obj.id === id)
//     dadosManipulaveis[indice].nome = nome
//   } else {
//     // Adiciona elementos na lista
//     dadosManipulaveis.push({nome, id: idGlobal})
//     idGlobal++
//   }
// }
export function salvar(nome, id){
  const indice = dadosManipulaveis.findIndex((obj) => obj.id === id) // -> verificar se o indice existe (Porque um id pode ter sido deletado, então manipular o índice é mais confiável)
  if(indice >= 0){ 
    dadosManipulaveis[indice].nome = nome
  } else {
    const idUnico = uuidv4();
    dadosManipulaveis.push({nome, id: idUnico})

    // // SEM UUID
    // // Adiciona elementos na lista
    // dadosManipulaveis.push({nome, id: idGlobal})
    // idGlobal++
  }
}

export function pegarDados(){
  // Atraves de um map, pega os atributos nome e id
  const dadosImprimiveis = dadosManipulaveis.map((dado) => {
    return `${dado.nome} -> ${dado.id}`
  })
  return dadosImprimiveis
}

export function deletar(id){
  // fitra de uma lista os dados que são diferentes do id passado
  const dadosFiltrados = dadosManipulaveis.filter((dado) => {
    return dado.id != id
  })
  //substitui a lista original pela lista filtrada
  dadosManipulaveis = dadosFiltrados;
}
