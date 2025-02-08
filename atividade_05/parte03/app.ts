import prompt from "prompt-sync";
import { Conta, Banco, Cliente } from "./banco";

let input = prompt();
let b: Banco = new Banco();
let opcao: string = '';

do {
    console.log('\nBem vindo\nDigite uma opção:');
    console.log('Contas:');
    console.log('1 - Inserir conta 2 - Consultar conta 3 - Sacar');
    console.log('4 - Depositar 5 - Excluir conta 6 - Transferir');
    console.log('7 - Totalizações');
    console.log('Clientes:');
    console.log('8 - Inserir cliente 9 - Consultar cliente 10 - Associar cliente');
    console.log('Sair');
    
    opcao = input("Opção:");
    
    switch (opcao) {
        case "1":
            inserirConta();
            break;
        case "2":
            consultarConta();
            break;
        case "3":
            sacar();
            break;
        case "4":
            depositar();
            break;
        case "5":
            excluir();
            break;
        case "6":
            transferir();
            break;
        case "8":
            inserirCliente();
            break;
        case "9":
            consultarCliente();
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

function inserirConta(): void {
    console.log("\nCadastrar conta\n");
    let numero: string = input('Digite o número da conta:');
    let conta = new Conta(numero, 0);
    b.inserir_conta(conta);
    console.log(`Conta ${numero} inserida com sucesso.`);
}

function consultarConta(): void {
    let numero: string = input('Digite o número da conta:');
    let conta = b.consultarConta(numero);
    if (conta) {
        console.log(`Conta ${conta.numero} encontrada com saldo ${conta.saldo}.`);
    } else {
        console.log('Conta não encontrada.');
    }
}

function sacar(): void {
    let numero: string = input('Digite o número da conta:');
    let valor: number = parseFloat(input('Digite o valor a sacar:'));
    b.sacar(numero, valor);
}

function depositar(): void {
    let numero: string = input('Digite o número da conta:');
    let valor: number = parseFloat(input('Digite o valor a depositar:'));
    b.depositar(numero, valor);
}

function excluir(): void {
    let numero: string = input('Digite o número da conta:');
    b.excluir(numero);
}

function transferir(): void {
    let numeroOrigem: string = input('Digite o número da conta de origem:');
    let numeroDestino: string = input('Digite o número da conta de destino:');
    let valor: number = parseFloat(input('Digite o valor a transferir:'));
    b.transferir(numeroOrigem, numeroDestino, valor);
}

function inserirCliente(): void {
    let id: number = parseInt(input('Digite o id do cliente:'));
    let nome: string = input('Digite o nome do cliente:');
    let cpf: string = input('Digite o CPF do cliente:');
    let dataNascimento: Date = new Date(input('Digite a data de nascimento do cliente (yyyy-mm-dd):'));
    let cliente = new Cliente(id, nome, cpf, dataNascimento);
    b.inserirCliente(cliente);
    console.log(`Cliente ${nome} inserido com sucesso.`);
}

function consultarCliente(): void {
    let cpf: string = input('Digite o CPF do cliente:');
    let cliente = b.consultarCliente(cpf);
    if (cliente) {
        console.log(`Cliente encontrado: ${cliente.nome}`);
    } else {
        console.log('Cliente não encontrado.');
    }
}

