let palavra = "abelha";
let palpite = "a";
let cont = 0;

for (let i = 0; i < palavra.length; i++) {

    if (palavra.charAt(i) == palpite) {
        cont++;
    }

}

console.log(cont);