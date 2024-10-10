let tarefas = [];

for (let i = 0; i < 5; i++) {
    tarefas.push(prompt(`Insira a tarefa ${i + 1}:`));
}

console.log("\nTarefas: ");
tarefas.forEach((tarefa, index) => console.log(`${index + 1}. ${tarefa}`));

let numeroTarefa = parseInt(prompt("Qual tarefa você deseja marcar como concluída (digite o número): "));
if (numeroTarefa > 0 && numeroTarefa <= tarefas.length) {
    let tarefaConcluida = tarefas.splice(numeroTarefa - 1, 1);
    console.log(`Tarefa "${tarefaConcluida}" marcada como concluída. `);
} else {
    console.log("Número da tarefa inválido! ");
}

console.log("\nTarefas restantes: ");
tarefas.forEach((tarefa, index) => console.log(`${index + 1}. ${tarefa}`));
