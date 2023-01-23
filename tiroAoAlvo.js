let disparos = [20, 30, 40, 50, 80, 80, 80];
let cont = 0;
for (let i of disparos) {
    if (i > 70) {
        cont++;
    }
}

if (cont >= 3) {
    console.log(cont);
} else {
    console.log("ELIMINADO");

}