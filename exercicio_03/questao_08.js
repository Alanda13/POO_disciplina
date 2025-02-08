function main() {
    var array = [1, 2, 3, 4, 5];
    var dobrados = array.map(function (numero) { return numero * 2; });
    var somaTotal = dobrados.reduce(function (acumulador, numero) { return acumulador + numero; }, 0);
    console.log("Elementos dobrados:", dobrados);
    console.log("Soma total dos elementos dobrados:", somaTotal);
}
main();
