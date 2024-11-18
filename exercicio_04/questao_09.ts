class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }

    sacar(valor: number): boolean {
        if (valor > this.saldo) {
            console.log(`Saque de R$${valor} não realizado. Saldo insuficiente.`);
            return false; 
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso.`);
        return true; 
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso.`);
    }

    consultarSaldo(): number {
        return this.saldo;
    }

    transferir(contaDestino: Conta, valor: number): boolean {
        if (this.sacar(valor)) { 
            contaDestino.depositar(valor); 
            console.log(`Transferência de R$${valor} realizada com sucesso para a conta ${contaDestino.numero}.`);
            return true; 
        }
        console.log(`Transferência de R$${valor} não realizada. Saldo insuficiente.`);
        return false; 
    }
}

function main(): void {
    const conta1 = new Conta("001", 500);
    const conta2 = new Conta("002", 300);

    console.log("Saldo inicial conta 1:", conta1.consultarSaldo()); 
    console.log("Saldo inicial conta 2:", conta2.consultarSaldo());

    conta1.sacar(600); 
    conta1.sacar(200); 

    conta2.depositar(100); 

    conta1.transferir(conta2, 300); 

    console.log("Saldo final conta 1:", conta1.consultarSaldo()); 
    console.log("Saldo final conta 2:", conta2.consultarSaldo()); 
}

main();
