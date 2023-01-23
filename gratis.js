let precos = [100, 200, 300, 400, 500];


let menorPreco = precos[0];
let somaPrecos = 0;

if (precos.length >= 5) {
    for (let i = 0; i < precos.length; i++) {
        if (precos[i] < menorPreco) {
            menorPreco = precos[i]
        }
        somaPrecos += precos[i];
    }


    let valorFinal = somaPrecos - menorPreco;
    console.log(valorFinal);

} else {
    for (let i = 0; i < precos.length; i++) {
        somaPrecos += precos[i];

    }

    console.log(somaPrecos);
}

