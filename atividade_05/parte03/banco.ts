export class Conta {
    numero: string;
    saldo: number;
    id: number;
    cliente: Cliente | null;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
        this.cliente = null;
    }
}
export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    data_nascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, data_nascimento: Date, contas: Conta[] = []) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.contas = contas;
    }
}

export class Banco {
    contas: Conta[];
    clientes: Cliente[];

    constructor() {
        this.contas = [];
        this.clientes = [];
    }
    inserirCliente(cliente:Cliente): void{
        this.clientes.push(cliente);
    } 
    consultarCliente(cpf:string): Cliente | undefined{ 
        for (let cliente of this.clientes){
            if (cliente.cpf === cpf){
                return cliente;
            }
        }
        console.log("Cliente não encontrado!")
        return undefined;   
    }
    consultarConta(numero: string): Conta | undefined {
        const conta = this.contas.find(conta => conta.numero === numero);
        if (!conta) {
            console.log(`Conta com número ${numero} não encontrada.`);
            return undefined;
        }
        return conta;
    }
    associarClienteConta(numeroConta: string, cpf_cliente: string): void{
        let cliente_selecionado = this.consultarCliente(cpf_cliente);
        let conta_selecionada = this.consultarConta(numeroConta);

        if(!conta_selecionada){
            console.log(`ERRO!CONTA COM NÚMERO ${numeroConta} NÃO FOI ENCONTRADA!!!!!`)
            return;
        }
        if(!cliente_selecionado){
            console.log(`ERRO1 CLIENTE COM O CPF ${cpf_cliente} NÃO FOI ENCONTRADO!!!!1`)
            return;
        }
        if(conta_selecionada.cliente){
            console.log(`ERRO!! A CONTA ${conta_selecionada.numero}JÁ ESTÁ ASSOCIADA AO CLIENTE ${conta_selecionada}!!!`)
            return;
        }

        conta_selecionada.cliente = cliente_selecionado;
        cliente_selecionado.contas.push(conta_selecionada);

        console.log(`Cliente ${cliente_selecionado.nome} associado a conta ${numeroConta}.`);
    }
    Listar_contas_cliente(cpf:string):Conta[]{
        const cliente = this.consultarCliente(cpf);
        return cliente.contas;
    }
    totalizar_saldo_cliente(cpf:string): number{
        let contas_cliente_selecionadas = this.Listar_contas_cliente(cpf);

        if(!contas_cliente_selecionadas || contas_cliente_selecionadas.length === 0){
            console.log('NENHUMA CONTA ENCONTRADA!');
            return 0;
        }
        return contas_cliente_selecionadas.reduce((total, conta) => total + conta.saldo, 0);
    }
    inserir_conta(conta:Conta):void{
        this.contas.push(conta);
    }
    excluir(numeroConta: string): void {
        let indice: number = this.consultar_por_indice(numeroConta);
        if (indice != -1) {
        for (let i: number = indice; i < this.contas.length-1; i++) {
        this.contas[i] = this.contas[i + 1];
        }
        this.contas.pop();
        }
    }
    sacar(numeroConta, valor){
        let conta = this.consultarConta(numeroConta);
        if(conta){
            conta.saldo -= valor;
        }
    }
    depositar(numeroConta, valor) {
        let conta = this.consultarConta(numeroConta);
        if (conta) {
            conta.saldo += valor;
        }
    }
    transferir(numeroConta_depos, numeroConta_dest, valor) {
        let conta_depos = this.consultarConta(numeroConta_depos);
        let conta_dest = this.consultarConta(numeroConta_dest);
        if (conta_depos && conta_dest) {
            conta_depos.saldo -= valor;
            conta_dest.saldo += valor;
        }
    }
}