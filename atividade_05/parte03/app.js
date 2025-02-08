"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = require("prompt-sync");
var banco_1 = require("./banco");
var input = (0, prompt_sync_1.default)();
var b = new banco_1.Banco();
var opcao = '';
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
function inserirConta() {
    console.log("\nCadastrar conta\n");
    var numero = input('Digite o número da conta:');
    var conta = new banco_1.Conta(numero, 0);
    b.inserir_conta(conta);
    console.log("Conta ".concat(numero, " inserida com sucesso."));
}
function consultarConta() {
    var numero = input('Digite o número da conta:');
    var conta = b.consultarConta(numero);
    if (conta) {
        console.log("Conta ".concat(conta.numero, " encontrada com saldo ").concat(conta.saldo, "."));
    }
    else {
        console.log('Conta não encontrada.');
    }
}
function sacar() {
    var numero = input('Digite o número da conta:');
    var valor = parseFloat(input('Digite o valor a sacar:'));
    b.sacar(numero, valor);
}
function depositar() {
    var numero = input('Digite o número da conta:');
    var valor = parseFloat(input('Digite o valor a depositar:'));
    b.depositar(numero, valor);
}
function excluir() {
    var numero = input('Digite o número da conta:');
    b.excluir(numero);
}
function transferir() {
    var numeroOrigem = input('Digite o número da conta de origem:');
    var numeroDestino = input('Digite o número da conta de destino:');
    var valor = parseFloat(input('Digite o valor a transferir:'));
    b.transferir(numeroOrigem, numeroDestino, valor);
}
function inserirCliente() {
    var id = parseInt(input('Digite o id do cliente:'));
    var nome = input('Digite o nome do cliente:');
    var cpf = input('Digite o CPF do cliente:');
    var dataNascimento = new Date(input('Digite a data de nascimento do cliente (yyyy-mm-dd):'));
    var cliente = new banco_1.Cliente(id, nome, cpf, dataNascimento);
    b.inserirCliente(cliente);
    console.log("Cliente ".concat(nome, " inserido com sucesso."));
}
function consultarCliente() {
    var cpf = input('Digite o CPF do cliente:');
    var cliente = b.consultarCliente(cpf);
    if (cliente) {
        console.log("Cliente encontrado: ".concat(cliente.nome));
    }
    else {
        console.log('Cliente não encontrado.');
    }
}
