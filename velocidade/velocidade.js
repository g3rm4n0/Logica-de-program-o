function verificarMulta(velocidadePermitida, velocidadeCondutor) {
    if (velocidadeCondutor <= velocidadePermitida) {
        console.log("Sem Multa");
    } else if (velocidadeCondutor <= velocidadePermitida * 1.2) {
        console.log("Multa Leve");
    } else {
        console.log("Multa Grave");
    }
}


let velocidadePermitida = 100; // Velocidade permitida na estrada
let velocidadeCondutor = 95;  // Velocidade do condutor

verificarMulta(velocidadePermitida, velocidadeCondutor);