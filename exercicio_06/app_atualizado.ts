import prompt from "prompt-sync";
import { Conta, Banco, Cliente } from "./banco";

export class App {
    private banco: Banco;

    constructor() {
        this.banco = new Banco();
    }

    public executar(): void {
        let input = prompt();
        let opcao: string = "";

        do {
            console.log("\nBem vindo\nDigite uma opção:");
            console.log("Contas:");
            console.log("1 - Inserir conta 2 - Consultar conta 3 - Sacar");
            console.log("4 - Depositar 5 - Excluir conta 6 - Transferir");
            console.log("7 - Totalizações");
            console.log("Clientes:");
            console.log("8 - Inserir cliente 9 - Consultar cliente 10 - Associar cliente");
            console.log("Sair");

            opcao = input("Opção:");

            switch (opcao) {
                case "1":
                    this.inserirConta();
                    break;
                case "2":
                    this.consultarConta();
                    break;
                case "3":
                    this.sacar();
                    break;
                case "4":
                    this.depositar();
                    break;
                case "5":
                    this.excluir();
                    break;
                case "6":
                    this.transferir();
                    break;
                case "8":
                    this.inserirCliente();
                    break;
                case "9":
                    this.consultarCliente();
                    break;
                case "0":
                    console.log("Aplicação encerrada.");
                    break;
                default:
                    console.log("Opção inválida.");
                    break;
            }

            input("Operação finalizada. Digite <enter> para continuar.");
        } while (opcao !== "0");
    }

    private inserirConta(): void {
        console.log("\nCadastrar conta\n");
        let input = prompt();
        let numero: string = input("Digite o número da conta:");
        let conta = new Conta(numero, 0);
        this.banco.inserirConta(conta);
        console.log(`Conta ${numero} inserida com sucesso.`);
    }

    private consultarConta(): void {
        let input = prompt();
        let numero: string = input("Digite o número da conta:");
        let conta = this.banco.consultarConta(numero);
        if (conta) {
            console.log(
                `Conta ${conta.getNumero()} encontrada com saldo ${conta.getSaldo()}.`
            );
        } else {
            console.log("Conta não encontrada.");
        }
    }

    private sacar(): void {
        let input = prompt();
        let numero: string = input("Digite o número da conta:");
        let valor: number = parseFloat(input("Digite o valor a sacar:"));
        this.banco.sacar(numero, valor);
    }

    private depositar(): void {
        let input = prompt();
        let numero: string = input("Digite o número da conta:");
        let valor: number = parseFloat(input("Digite o valor a depositar:"));
        this.banco.depositar(numero, valor);
    }

    private excluir(): void {
        let input = prompt();
        let numero: string = input("Digite o número da conta:");
        this.banco.excluirConta(numero);
    }

    private transferir(): void {
        let input = prompt();
        let numeroOrigem: string = input("Digite o número da conta de origem:");
        let numeroDestino: string = input("Digite o número da conta de destino:");
        let valor: number = parseFloat(input("Digite o valor a transferir:"));
        this.banco.transferir(numeroOrigem, numeroDestino, valor);
    }

    private inserirCliente(): void {
        let input = prompt();
        let nome: string = input("Digite o nome do cliente:");
        let cpf: string = input("Digite o CPF do cliente:");
        let dataNascimento: Date = new Date(input("Digite a data de nascimento do cliente (yyyy-mm-dd):"));
        let cliente = new Cliente(nome, cpf, dataNascimento);
        this.banco.inserirCliente(cliente);
        console.log(`Cliente ${nome} inserido com sucesso.`);
    }

    private consultarCliente(): void {
        let input = prompt();
        let cpf: string = input("Digite o CPF do cliente:");
        let cliente = this.banco.consultarCliente(cpf);
        if (cliente) {
            console.log(`Cliente encontrado: ${cliente.getNome()}`);
        } else {
            console.log("Cliente não encontrado.");
        }
    }
}
