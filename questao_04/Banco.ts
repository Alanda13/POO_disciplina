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

export class ContaEspecial extends Conta {
    private limiteCredito: number;

    constructor(numero: string, saldo: number, limiteCredito: number) {
        super(numero, saldo);
        this.limiteCredito = limiteCredito;
    }

    public usarCredito(valor: number): void {
        const saldoTotal = this.getSaldo() + this.limiteCredito;
        if (valor > saldoTotal) {
            console.log("Crédito insuficiente!");
        } else if (valor > this.getSaldo()) {
            const creditoUsado = valor - this.getSaldo();
            this.setSaldo(0);
            this.limiteCredito -= creditoUsado;
            console.log(`Crédito de ${creditoUsado} usado na conta ${this.getNumero()}.`);
        } else {
            this.sacar(valor);
        }
    }

    public getLimiteCredito(): number {
        return this.limiteCredito;
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
                const [tipo, numero, saldo, ...rest] = linha.split(";").map(e => e.trim());

                switch (tipo) {
                    case "C":
                        this.inserirConta(new Conta(numero, parseFloat(saldo)));
                        break;
                    case "CP":
                        this.inserirConta(new ContaPoupanca(numero, parseFloat(saldo), parseFloat(rest[0])));
                        break;
                    case "CI":
                        this.inserirConta(new ContaImposto(numero, parseFloat(saldo), parseFloat(rest[0])));
                        break;
                    case "CE":
                        this.inserirConta(new ContaEspecial(numero, parseFloat(saldo), parseFloat(rest[0])));
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
                    return `CP;${conta.getNumero()};${conta.getSaldo()};${conta.getTaxaJuros()}`;
                } else if (conta instanceof ContaImposto) {
                    return `CI;${conta.getNumero()};${conta.getSaldo()};${conta.getTaxaImposto()}`;
                } else if (conta instanceof ContaEspecial) {
                    return `CE;${conta.getNumero()};${conta.getSaldo()};${conta.getLimiteCredito()}`;
                } else {
                    return `C;${conta.getNumero()};${conta.getSaldo()}`;
                }
            });

            fs.writeFileSync("contas.txt", linhas.join("\n"), "utf-8");
        } catch (error) {
            console.log("Erro ao salvar contas no arquivo:", error.message);
        }
    }
}
