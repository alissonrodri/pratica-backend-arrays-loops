let dadoPurificado = '';

for (let c of stringCorrompida) {
    if (c === "!" || c === "@" || c === "#" || c === "$" || c === "%" || c === "&" || c === "*" || c === "(" ||
        c === ")" || c === ".") {
        //NTD
    } else {
        dadoPurificado += c;
    }
}

console.log(dadoPurificado);
