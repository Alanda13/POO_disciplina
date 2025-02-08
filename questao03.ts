public alterar(numero: string, novaConta: Conta): void {
    let conta = this.consultar(numero);
    conta = novaConta;
}

public depositar(numero: string, valor: number): void {
    this.consultar(numero).depositar(valor);
}

public sacar(numero: string, valor: number): void {
    this.consultar(numero).sacar(valor);
}

public transferir(origem: string, destino: string, valor: number): void {
    this.consultar(origem).sacar(valor);
    this.consultar(destino).depositar(valor);
}

public renderJuros(numero: string, taxa: number): void {
    const conta = this.consultar(numero);
    if (!(conta instanceof ContaPoupanca)) {
        throw new PoupancaInvalidaError();
    }
    conta.renderJuros(taxa);
}
}