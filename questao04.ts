class ValorInvalidoError extends AplicacaoError {
    constructor() {
        super("Valor inválido.");
        this.name = "ValorInvalidoError";