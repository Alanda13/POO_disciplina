//Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
//valorDebitos. Crie um método chamado calcularSaldo() que retorna/calcula a
//diferença entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize
//os dois atributos e exiba o resultado do método calcularSaldo().
class SituacaoFinanceira{
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcularSaldo(): number{
        return this.valorCreditos - this.valorDebitos;
    }
}
function main(){
    const situacao = new SituacaoFinanceira();
    situacao.valorCreditos = 700;
    situacao.valorDebitos = 475;

    const saldo = situacao.calcularSaldo();
    console.log(`Valor do Saldo: ${saldo}`);

}
main();
