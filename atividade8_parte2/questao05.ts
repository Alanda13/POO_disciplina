class ContaRefatorada {
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldoInicial: number) {
        this.numero = numero;
        this.saldo = 0;
        this.depositar(saldoInicial);
    }

    private validarValor(valor: number): void {
        if (valor <= 0) {
            throw new ValorInvalidoError();
        }
    }

    public depositar(valor: number): void {
        this.validarValor(valor);
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        this.validarValor(valor);
        if (valor > this.saldo) {
            throw new SaldoInsuficienteError();
        }
        this.saldo -= valor;
    }
}