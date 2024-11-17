//Crie uma função que receba como parâmetros um nome e um pronome de
//tratamento opcional. Caso esse último não seja fornecido, deve ser considerado o
//valor “Sr”. Ao final, imprima uma saudação semelhante a “Sra. Sávia”.

function main(): void{
    saudacao("Lionel");
    saudacao("Antonela", "Sra")

}
function saudacao(nome:string, pronome_tratamento: string = 'Sr.'):void{
    console.log(`${pronome_tratamento} ${nome}`)

}
main()