//Crie as classes AplicacaoError descendente de Error. Crie também classes
//ContaInexistenteError, ClienteNaoEncontradoError e SaldoInsuficienteError. Todas
//decendentes da classe AplicacaoError.

class AplicacaoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AplicacaoError";
    }
}

class ContaInexistenteError extends AplicacaoError {
    constructor() {
        super("Conta não encontrada.");
        this.name = "ContaInexistenteError";
    }
}

class ClienteNaoEncontradoError extends AplicacaoError {
    constructor() {
        super("Cliente não encontrado.");
        this.name = "ClienteNaoEncontradoError";
    }
}

class SaldoInsuficienteError extends AplicacaoError {
    constructor() {
        super("Saldo insuficiente.");
        this.name = "SaldoInsuficienteError";
    }
}
