import { Banco, Conta, ContaPoupanca, ContaImposto, ContaEspecial } from "./banco";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const banco = new Banco();
banco.carregarContas();

const menu = `
1 - Cadastrar Conta Comum
2 - Cadastrar Conta Poupança
3 - Cadastrar Conta Imposto
4 - Cadastrar Conta Especial
5 - Render Juros
6 - Salvar Contas no Arquivo
7 - Sair
`;

let opcao: number;
do {
    console.log(menu);
    opcao = parseInt(prompt("Escolha uma opção: ") || "0");

    switch (opcao) {
        case 1: { // Cadastrar Conta Comum
            const numeroC = prompt("Número da conta: ") || "";
            const saldoC = parseFloat(prompt("Saldo inicial: ") || "0");
            if (!isNaN(saldoC)) {
                banco.inserirConta(new Conta(numeroC, saldoC));
            } else {
                console.log("Saldo inválido.");
            }
            break;
        }
        case 2: { // Cadastrar Conta Poupança
            const numeroCP = prompt("Número da poupança: ") || "";
            const saldoCP = parseFloat(prompt("Saldo inicial: ") || "0");
            const taxaJuros = parseFloat(prompt("Taxa de juros: ") || "0");
            if (!isNaN(saldoCP) && !isNaN(taxaJuros)) {
                banco.inserirConta(new ContaPoupanca(numeroCP, saldoCP, taxaJuros));
            } else {
                console.log("Dados inválidos.");
            }
            break;
        }
        case 3: { // Cadastrar Conta Imposto
            const numeroCI = prompt("Número da conta imposto: ") || "";
            const saldoCI = parseFloat(prompt("Saldo inicial: ") || "0");
            const taxaImposto = parseFloat(prompt("Taxa de imposto: ") || "0");
            if (!isNaN(saldoCI) && !isNaN(taxaImposto)) {
                banco.inserirConta(new ContaImposto(numeroCI, saldoCI, taxaImposto));
            } else {
                console.log("Dados inválidos.");
            }
            break;
        }
        case 4: { // Cadastrar Conta Especial
            const numeroCE = prompt("Número da conta especial: ") || "";
            const saldoCE = parseFloat(prompt("Saldo inicial: ") || "0");
            const limiteCredito = parseFloat(prompt("Limite de crédito: ") || "0");
            if (!isNaN(saldoCE) && !isNaN(limiteCredito)) {
                banco.inserirConta(new ContaEspecial(numeroCE, saldoCE, limiteCredito));
            } else {
                console.log("Dados inválidos.");
            }
            break;
        }
        case 5: { // Render Juros
            const numeroJuros = prompt("Número da poupança para render juros: ") || "";
            banco.renderJuros(numeroJuros);
            break;
        }
        case 6: { // Salvar Contas no Arquivo
            banco.salvarContas();
            console.log("Contas salvas com sucesso!");
            break;
        }
        case 7: { // Sair
            console.log("Saindo...");
            break;
        }
        default: {
            console.log("Opção inválida.");
        }
    }
} while (opcao !== 7);
