class App {
    public static validarCPF(cpf: string): void {
        if (!/^[0-9]{11}$/.test(cpf)) {
            throw new AplicacaoError("CPF inválido.");
        }
    }

    public static validarDataNascimento(data: string): void {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) {
            throw new AplicacaoError("Data de nascimento inválida.");
        }
    }
}