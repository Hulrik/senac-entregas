let listaDeTarefas = []
let pergunta = prompt("uma tarefa que voce faz no dia:")
let pergunta2 = prompt("segunda tarefa:")
let pergunta3 = prompt("terceira tarefa:")

listaDeTarefas [0] = pergunta
listaDeTarefas [1] = pergunta2
listaDeTarefas [2] = pergunta3
console.log (listaDeTarefas)

console.log (listaDeTarefas[0],listaDeTarefas[1],listaDeTarefas[2])

let realizou = prompt("qual voce ja realizou? 0,1 ou 2?")
listaDeTarefas.splice (realizou,1)
console.log (listaDeTarefas)

