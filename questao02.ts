class Banco {
    private contas: Conta[] = [];

    public consultar(numero: string): Conta {
        const conta = this.contas.find(conta => conta.numero === numero);
        if (!conta) {
            throw new ContaInexistenteError();
        }
        return conta;
    }
}