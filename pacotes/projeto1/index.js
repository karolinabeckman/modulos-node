import chalk from "chalk" // Manipula textos no console
import server from "server"
import { DateTime } from "luxon"

const { get } = server.router
function imprimeHora(cidade, hora){
  console.log(chalk.bgBlue(`Em ${cidade} são ${hora}`))
}

server({port:8080},[
  get("/",(ctx)=> "Hola mundo"),
  get("/roma", () =>{
    const horario = DateTime.local({zone:"Europe/Rome"}).toFormat("HH:mm:ss");
    imprimeHora("Roma", horario)
    return horario
  }),
  get("/luanda", () =>{
    const horario = DateTime.local({zone:"Africa/Luanda"}).toFormat("HH:mm:ss");
    imprimeHora("Luanda", horario)
    return horario
  }),
  get("/seoul", () =>{
    const horario = DateTime.local({zone:"Asia/Seoul"}).toFormat("HH:mm:ss");
    imprimeHora("Seoul", horario)
    return horario
  }),
  get("/cuiaba", () =>{
    const horario = DateTime.local({zone:"America/Cuiaba"}).toFormat("HH:mm:ss");
    imprimeHora("Cuiaba", horario)
    return horario
  }),
])

// const azul = (texto) => console.log(chalk.blue(texto))
// const aviso = (texto) => {
//   console.log(chalk.bgYellow.bold(texto))
// }
// const erro = (texto) => {
//   console.log(chalk.bgRed.bold.italic(texto))
// }

// azul("Sou um texto")
// aviso("Preciso te avisar de uma coisa")
// erro("Abortar missão")