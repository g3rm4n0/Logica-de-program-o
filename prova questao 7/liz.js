const lizTarefas  = ["1Estudar JavaScript", "2Fazer exercícios", "3Ler um livro"]
let listarTaref [];
let adicionarTaref [];
let removerTaref [];

for(let i = 0; i < lizTarefas.length; i++) {
    console.log(tarefas[i]);

} 
listarTaref = lizTarefas.join(",");
console.log(listarTaref)

adicionarTaref = lizTarefas.push("prova");
console.log(adicionarTaref)

removerTaref = lizTarefas.splice(0);
console.log(removerTaref);


