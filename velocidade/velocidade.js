function verificarMulta(vPermitida, vCondutor) {
    if (vCondutor <= vPermitida) {
        console.log("Sem Multa");
    } else if (vCondutor <= vPermitida * 1.2) {
        console.log("Multa Leve");
    } else {
        console.log("Multa Grave");
    }
}


let vPermitida = 100;
let vCondutor = 80;  

verificarMulta(vPermitida, vCondutor);