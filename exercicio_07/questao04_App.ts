import { Banco, Conta, ContaPoupanca, ContaImposto } from "./Banco";
import promptSync from 'prompt-sync';

const prompt = promptSync(); 

const banco = new Banco();
banco.carregarContas();

const menu = `
1 - Cadastrar Conta Comum
2 - Cadastrar Conta Poupança
3 - Cadastrar Conta Imposto
4 - Render Juros
5 - Salvar Contas no Arquivo
6 - Sair
`;

let opcao: number;
do {
    console.log(menu);
    opcao = parseInt(prompt("Escolha uma opção: ") || "0");

    switch (opcao) {
        case 1:
            const numeroC = prompt("Número da conta: ") || "";
            const saldoC = parseFloat(prompt("Saldo inicial: ") || "0");
            if (!isNaN(saldoC)) {
                banco.inserirConta(new Conta(numeroC, saldoC));
            } else {
                console.log("Saldo inválido.");
            }
            break;
        case 2:
            const numeroCP = prompt("Número da poupança: ") || "";
            const saldoCP = parseFloat(prompt("Saldo inicial: ") || "0");
            const taxaJuros = parseFloat(prompt("Taxa de juros: ") || "0");
            if (!isNaN(saldoCP) && !isNaN(taxaJuros)) {
                banco.inserirConta(new ContaPoupanca(numeroCP, saldoCP, taxaJuros));
            } else {
                console.log("Dados inválidos.");
            }
            break;
        case 3:
            const numeroCI = prompt("Número da conta imposto: ") || "";
            const saldoCI = parseFloat(prompt("Saldo inicial: ") || "0");
            const taxaImposto = parseFloat(prompt("Taxa de imposto: ") || "0");
            if (!isNaN(saldoCI) && !isNaN(taxaImposto)) {
                banco.inserirConta(new ContaImposto(numeroCI, saldoCI, taxaImposto));
            } else {
                console.log("Dados inválidos.");
            }
            break;
        case 4:
            const numeroJuros = prompt("Número da poupança: ") || "";
            banco.renderJuros(numeroJuros);
            break;
        case 5:
            banco.salvarContas();
            console.log("Contas salvas com sucesso!");
            break;
        case 6:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 6);

