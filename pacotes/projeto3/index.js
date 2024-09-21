import { salvar, deletar, pegarDados, persistirValores } from "./Banco.js";
import { finaliza, menu, menuSelecaoUsuario, leInput, textoAzul, textoVerde } from "./Interface.js";

const itensMenu = [" Adicionar ", " Editar ", " Deletar ", " Ver Todos ", " Persistir ", " Sair "]
let nome;
let id

while(true){
  const selecionado = await menu(itensMenu)
  const selecionadoTratado = selecionado.trim().toLowerCase()
  switch(selecionadoTratado){
    case 'adicionar':
      nome = await leInput("Digite o nome do usuário: ")
      salvar(nome)
      textoVerde("Feito!")
      break
    case 'editar':
      id = await menuSelecaoUsuario(pegarDados())
      // id = await leInput("ID para editar: ")
      nome = await leInput("Nome atualizado: ")
      salvar(nome, id)
      // salvar(nome, +id) // -> SEM UUID
      textoVerde("Feito!")
      break
    case 'deletar':
      id = await menuSelecaoUsuario(pegarDados())
      // id = await leInput("ID para excluir: ")
      deletar(id)
      // deletar(+id) // -> SEM UUID
      textoVerde("Feito!")
      break
    case 'ver todos':
      const dados = pegarDados()
      textoAzul(dados)
      break
    case 'persistir':
      persistirValores()
      textoVerde("Feito!")
      break
    case 'sair':
      finaliza()
      textoVerde("Até mais")
    default:
      console.log(`${selecionadoTratado} não é válido`)
  }
}











// // TESTE MÓDULO BANCO ==========================================
// // console.log(pegarDados())

// salvar("Ana")
// salvar("Pedro")
// salvar("Carlos")
// salvar("Marina")

// // salvar("Ana", 1)
// // salvar("Pedro", 2)
// // salvar("Carlos", 11)
// // salvar("Marina", 18)


// deletar(5)
// deletar(6)
// deletar(7)

// console.log(pegarDados())
// console.log('-------------------')
// salvar("Teste123", 7)
// console.log(pegarDados())

// persistirValores()