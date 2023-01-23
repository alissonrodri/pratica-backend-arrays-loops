let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];


let maiorNum = 0;
let menorNum = notas[0];
let somaNotas = 0;
let mediaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maiorNum) {
        maiorNum = notas[i];
    }
    if (notas[i] < menorNum) {
        menorNum = notas[i];
    }

    somaNotas += notas[i];

}

mediaNotas = (somaNotas - maiorNum - menorNum) / (notas.length - 2);


console.log(mediaNotas);