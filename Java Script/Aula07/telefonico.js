let casoUrgente = false;
let casoComum = false;
let infoGerais = true;

let atendimento = infoGerais;

if (atendimento == casoUrgente) {
    console.log("Seu atendimento será redirecionado para um atendente imediatamente.");
} else if (atendimento == casoComum){ 
    console.log(" Você está na fila de espera.");
} else if (atendimento == infoGerais) {
    console.log("Você irá ser redirecionado para um menu automático ");
} else {
    console.log("Opção invalidaa!");
}