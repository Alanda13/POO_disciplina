//Crie uma função que receba como parâmetros um nome e um pronome de
//tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
//valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.
function main() {
    saudacao("Lionel");
    saudacao("Antonela", "Sra");
}
function saudacao(nome, pronome_tratamento) {
    if (pronome_tratamento === void 0) { pronome_tratamento = 'Sr'; }
    console.log("".concat(pronome_tratamento, ". ").concat(nome));
}
main();
