export class Conta {
    private id: number;
    private numero: string;
    private saldo: number;
    private cliente: Cliente | null;

    constructor(numero: string, saldo: number) {
        this.id = 0;
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = null;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNumero(): string {
        return this.numero;
    }

    public setNumero(numero: string): void {
        this.numero = numero;
    }

    public getSaldo(): number {
        return this.saldo;
    }

    public setSaldo(saldo: number): void {
        this.saldo = saldo;
    }

    public getCliente(): Cliente | null {
        return this.cliente;
    }

    public setCliente(cliente: Cliente | null): void {
        this.cliente = cliente;
    }

    public sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
        }
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public transferir(contaDestino: Conta, valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this.sacar(valor);
            contaDestino.depositar(valor);
        }
    }
}

export class Cliente {
    private id: number;
    private nome: string;
    private cpf: string;
    private dataNascimento: Date;
    private contas: Conta[];

    constructor(nome: string, cpf: string, dataNascimento: Date) {
        this.id = 0;
        this.nome = nome;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.contas = [];
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    public getContas(): Conta[] {
        return this.contas;
    }

    public adicionarConta(conta: Conta): void {
        this.contas.push(conta);
    }

    public removerConta(numeroConta: string): void {
        this.contas = this.contas.filter(conta => conta.getNumero() !== numeroConta);
    }

    public totalizarSaldo(): number {
        return this.contas.reduce((acc, conta) => acc + conta.getSaldo(), 0);
    }
}

export class Banco {
    private contas: Conta[];
    private clientes: Cliente[];
    private idClienteAtual: number;
    private idContaAtual: number;

    constructor() {
        this.contas = [];
        this.clientes = [];
        this.idClienteAtual = 1;
        this.idContaAtual = 1;
    }

    public inserirConta(conta: Conta): void {
        conta.setId(this.idContaAtual++);
        this.contas.push(conta);
    }

    public consultarConta(numero: string): Conta | undefined {
        return this.contas.find(conta => conta.getNumero() === numero);
    }

    private consultarContaPorIndice(numero: string): number {
        return this.contas.findIndex(conta => conta.getNumero() === numero);
    }

    public excluirConta(numero: string): void {
        const indice = this.consultarContaPorIndice(numero);
        if (indice !== -1) {
            const conta = this.contas[indice];
            const cliente = conta.getCliente();
            if (cliente) cliente.removerConta(numero);

            this.contas.splice(indice, 1);
        } else {
            console.log("Conta não encontrada.");
        }
    }

    public inserirCliente(cliente: Cliente): void {
        cliente.setId(this.idClienteAtual++);
        this.clientes.push(cliente);
    }

    public consultarCliente(cpf: string): Cliente | undefined {
        return this.clientes.find(cliente => cliente.getCpf() === cpf);
    }

    public listarContasCliente(cpf: string): Conta[] {
        const cliente = this.consultarCliente(cpf);
        return cliente ? cliente.getContas() : [];
    }

    public totalizarSaldoCliente(cpf: string): number {
        const cliente = this.consultarCliente(cpf);
        return cliente ? cliente.totalizarSaldo() : 0;
    }

    public associarContaCliente(numeroConta: string, cpfCliente: string): void {
        const conta = this.consultarConta(numeroConta);
        const cliente = this.consultarCliente(cpfCliente);

        if (!conta || !cliente) {
            console.log("Conta ou cliente não encontrados.");
            return;
        }

        if (conta.getCliente()) {
            console.log("Conta já associada a outro cliente.");
            return;
        }

        conta.setCliente(cliente);
        cliente.adicionarConta(conta);
    }

    public sacar(numero: string, valor: number): void {
        const conta = this.consultarConta(numero);
        if (conta) {
            conta.sacar(valor);
        }
    }

    public depositar(numero: string, valor: number): void {
        const conta = this.consultarConta(numero);
        if (conta) {
            conta.depositar(valor);
        }
    }

    public transferir(numeroOrigem: string, numeroDestino: string, valor: number): void {
        const contaOrigem = this.consultarConta(numeroOrigem);
        const contaDestino = this.consultarConta(numeroDestino);

        if (contaOrigem && contaDestino) {
            contaOrigem.transferir(contaDestino, valor);
        }
    }
}