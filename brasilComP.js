let primeiraLetra = "a";
let segundaLetra = "v";
let palavras = ["aveia", "manha", "ave"];
let palavrasArrayNovo = [];

for (let i of palavras) {
    if (i[0] === primeiraLetra && i[1] === segundaLetra) {
        palavrasArrayNovo.push(i);
    }

}

if (palavrasArrayNovo.length == 0) {
    console.log("NENHUMA");
}

else {
    for (let i = 0; i < palavrasArrayNovo.length; i++) {
        console.log(palavrasArrayNovo[i]);
    }
}
