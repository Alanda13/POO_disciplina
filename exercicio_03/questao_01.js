// 1. Crie uma função que recebe como parâmetro um número e retorna true se o
//número for par e false se for ímpar.
function main() {
    var numero = 51;
    var resultado = par_ou_impar(numero);
    console.log("".concat(numero, " \u00E9 ").concat(resultado ? "par" : "impar"));
}
function par_ou_impar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
main();
