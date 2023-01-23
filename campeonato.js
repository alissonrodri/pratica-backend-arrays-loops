let resultados = ["v", "v", "v", "e", "d", "v"];
let pontos = 0;

for (let i of resultados) {
    if (i == "V" || i == "v") {
        pontos += 3;
    } else if (i == "E" || i == "e") {
        pontos += 1;
    } else if (i == "D" || i == "d") {
        pontos += 0;
    }
}

console.log(pontos);