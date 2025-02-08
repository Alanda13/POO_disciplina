class PoupancaInvalidaError extends AplicacaoError {
    constructor() {
        super("A conta não é uma poupança.");
        this.name = "PoupancaInvalidaError";
    }
}