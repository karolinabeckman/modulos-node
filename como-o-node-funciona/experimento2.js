// Event Loop -> Responsável por pegar as funções que estão no event queue e colocar na call stack
// Event Queue (callback queue) - Armazena as funções callback(chamar depois)

function f1(){
  setTimeout(() => f2(),2000)
  console.log("Chamei f1")
}

function f2(){
  setTimeout(() => f3(),2000)
  console.log("Chamei f2")
}

function f3(){
  console.log("Chamei f3")
}

function principal(){
  console.log("funcao principal")
  f1()
}

principal()