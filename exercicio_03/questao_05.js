function exibir() {
    var elementos = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elementos[_i] = arguments[_i];
    }
    elementos.forEach(function (elemento, index) {
        console.log("Elemento ".concat(index + 1, ": ").concat(elemento));
    });
}
function main() {
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}
main();
