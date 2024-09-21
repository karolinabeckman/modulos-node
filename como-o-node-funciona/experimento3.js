// Thread Pool -> Responsável por armazenar quando o evento loop coloca o que está no event queue em execução

setTimeout(() => console.log("1"),5000)
setTimeout(() => console.log("2"),3000)
setTimeout(() => console.log("3"),1000)

console.log("Fim")