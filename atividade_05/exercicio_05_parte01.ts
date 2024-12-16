class Cliente {
    id: number;
    nome: string;
    cpf: string;
    data_nascimento: Date;
    contas: Conta[];

    constructor(id: number, nome: string, cpf: string, data_nascimento: Date, contas: Conta[]){
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.contas = contas;
    }
}

class Conta{
    numero: string;
    saldo: number;
    id: number;
    cliente: Cliente;

    constructor(numero:string, saldo:number, id:number, cliente:Cliente){
        this.numero = numero;
        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
    }
}
class Banco{
    contas: Conta[];
    clientes: Cliente[];

    constructor(){
        this.clientes = [];
        this.contas = [];
    }

    inserirCliente(cliente:Cliente): void{
        this.clientes.push(cliente);
    }
    //consulta de cliente através do cpf
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
}
function main(){
    let banco = new Banco();

    let cliente1 = new Cliente(10, "Lionel Messi", "123456789", new Date (1987-7-24), []);
    let cliente2 = new Cliente(10, "Alanda Amábily", "987654321", new Date (1990-10-13), []);

    banco.inserirCliente(cliente1);
    banco.inserirCliente(cliente2);

    let conta1 = new Conta("000-0", 200, 2, cliente1);
    let conta2 = new Conta("555-5", 500, 5, cliente2);

    banco.inserir_conta(conta1);
    banco.inserir_conta(conta2);

    banco.associarClienteConta("000-0", "123456789");
    banco.associarClienteConta("000-0", "987654321");

    console.log(banco.Listar_contas_cliente("123456789"));
}
main();