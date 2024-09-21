import pensador from "pensador-scrap"
import fs from "fs"

const autor = "friedrich nietzsche"
const { error, success } = await pensador.search({
  query: autor,
  limit: 12
})


// console.log(error)
// console.log(success)
let pensamentoPraSalvar;

try{
  const pensamentos = success.thought
  const indiceAleatorio = Math.floor(Math.random() * pensamentos.length)
  const pensamentoSelecionado = pensamentos[indiceAleatorio].content
  // console.log(pensamentoSelecionado)
  
  pensamentoPraSalvar = `Pensamento de ${autor} -> ${pensamentoSelecionado}\n`
  // console.log(pensamentoPraSalvar)
} catch(error) {
  // console.log(error)
  pensamentoPraSalvar = `${autor} não tem pensamentos\n`
} finally {
  // fs modulo do node para salvar em um arquivo externo
  // fs.writeFileSync("frases.txt", pensamentoPraSalvar, "utf-8") // Se houver um arquivo o conteúdo é sobrescrito.
  
  fs.appendFileSync("frases.txt", pensamentoPraSalvar, "utf-8")
  
  const texto = fs.readFileSync("frases.txt", "utf-8");
  
  console.log(texto)
}



// const pensamento = pensamentos.map(pensamento => console.log(pensamento.content))
// console.log(pensamento)

