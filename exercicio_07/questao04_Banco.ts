export class Conta {
    private id: number;
    private numero: string;
    private saldo: number;

    constructor(numero: string, saldo: number) {
        this.id = 0;
        this.numero = numero;
        this.saldo = saldo;
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
}

export class ContaPoupanca extends Conta {
    private taxaJuros: number;

    constructor(numero: string, saldo: number, taxaJuros: number) {
        super(numero, saldo);
        this.taxaJuros = taxaJuros;
    }

    public renderJuros(): void {
        const juros = this.getSaldo() * this.taxaJuros;
        this.depositar(juros);
        console.log(`Juros de ${juros} aplicados na conta ${this.getNumero()}.`);
    }

    public getTaxaJuros(): number {
        return this.taxaJuros;
    }
}

export class ContaImposto extends Conta {
    private taxaImposto: number;

    constructor(numero: string, saldo: number, taxaImposto: number) {
        super(numero, saldo);
        this.taxaImposto = taxaImposto;
    }

    public descontarImposto(): void {
        const imposto = this.getSaldo() * this.taxaImposto;
        this.sacar(imposto);
        console.log(`Imposto de ${imposto} descontado na conta ${this.getNumero()}.`);
    }

    public getTaxaImposto(): number {
        return this.taxaImposto;
    }
}

export class Banco {
    private contas: Conta[];
    private idContaAtual: number;

    constructor() {
        this.contas = [];
        this.idContaAtual = 1;
    }

    public inserirConta(conta: Conta): void {
        conta.setId(this.idContaAtual++);
        this.contas.push(conta);
    }

    public consultarConta(numero: string): Conta | undefined {
        return this.contas.find(conta => conta.getNumero() === numero);
    }

    public renderJuros(numero: string): void {
        const conta = this.consultarConta(numero);
        if (conta && conta instanceof ContaPoupanca) {
            conta.renderJuros();
        } else {
            console.log("A conta informada não é uma poupança ou não existe.");
        }
    }

    public carregarContas(): void {
        const fs = require("fs");
        try {
            const data = fs.readFileSync("contas.txt", "utf-8");
            const linhas = data.split("\n");

            for (const linha of linhas) {
                if (linha.trim() === "") continue;
                const [numero, saldo, tipo, taxa] = linha.split(";").map(e => e.trim());

                switch (tipo) {
                    case "C":
                        this.inserirConta(new Conta(numero, parseFloat(saldo)));
                        break;
                    case "CP":
                        this.inserirConta(new ContaPoupanca(numero, parseFloat(saldo), parseFloat(taxa)));
                        break;
                    case "CI":
                        this.inserirConta(new ContaImposto(numero, parseFloat(saldo), parseFloat(taxa)));
                        break;
                }
            }
        } catch (error) {
            console.log("Erro ao carregar contas do arquivo:", error.message);
        }
    }

    public salvarContas(): void {
        const fs = require("fs");
        try {
            const linhas = this.contas.map(conta => {
                if (conta instanceof ContaPoupanca) {
                    return `${conta.getNumero()};${conta.getSaldo()};CP;${conta.getTaxaJuros()}`;
                } else if (conta instanceof ContaImposto) {
                    return `${conta.getNumero()};${conta.getSaldo()};CI;${conta.getTaxaImposto()}`;
                } else {
                    return `${conta.getNumero()};${conta.getSaldo()};C`;
                }
            });

            fs.writeFileSync("contas.txt", linhas.join("\n"), "utf-8");
        } catch (error) {
            console.log("Erro ao salvar contas no arquivo:", error.message);
        }
    }
}
