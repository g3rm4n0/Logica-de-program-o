const lizTarefas  = ["1Estudar JavaScript", "2Fazer exercícios", "3Ler um livro"]
let listarT [];
let adicionarT [];
let removerT [];

for(let i = 0; i < lizTarefas.length; i++) {
    console.log(tarefas[i]);

} 
listarT = lizTarefas.join(" ");
console.log(listarT)

adicionarT = lizTarefas.push("estudar");
console.log(adicionarT)

removerT = lizTarefas.splice(0);
console.log(removerT);


