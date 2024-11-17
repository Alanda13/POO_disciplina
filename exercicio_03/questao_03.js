function formatando_arrays(array) {
    var resultado = "";
    array.forEach(function (numero, index) {
        resultado += numero;
        if (index < array.length - 1) {
            resultado += "-";
        }
    });
    return resultado;
}
function main() {
    var numeros = [1, 2, 3, 4, 5];
    var resultado = formatando_arrays(numeros);
    console.log(resultado);
}
main();
