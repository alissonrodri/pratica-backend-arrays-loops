
let letra = "m";
let palavras = ["mamao", "maca", "melao", "celancia", "laranja"];
let perdeu = 0;

for (let i of palavras) {
    if (i[0] != letra) {
        perdeu += 1;
    }
}

console.log(perdeu);