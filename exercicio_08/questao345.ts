class Conta {
    private saldo: number;
    private numero: string;
  
    constructor(numero: string, saldoInicial: number) {
      this.validaValor(saldoInicial); 
      this.numero = numero;
      this.saldo = saldoInicial;
    }
  
    sacar(valor: number): void {
      this.validaValor(valor); 
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente para saque.");
      }
      this.saldo -= valor;
    }
  
    depositar(valor: number): void {
      this.validaValor(valor); 
      this.saldo += valor;
    }
  
    transferir(destino: Conta, valor: number): void {
      this.validaValor(valor); 
      this.sacar(valor); 
      destino.depositar(valor);
    }
  
    getSaldo(): number {
      return this.saldo;
    }
  
    getNumero(): string {
      return this.numero;
    }
  
    private validaValor(valor: number): void {
      if (valor <= 0 || isNaN(valor)) {
        throw new Error("Valor inválido: deve ser maior que zero.");
      }
    }
  }
  
  class App {
    private contas: Conta[] = [];
  
    inserirConta(conta: Conta): void {
      this.contas.push(conta);
    }
  
    buscarConta(numero: string): Conta {
      const conta = this.contas.find((c) => c.getNumero() === numero);
      if (!conta) {
        throw new Error(`Conta com número ${numero} não encontrada.`);
      }
      return conta;
    }
  
    transferir(origemNumero: string, destinoNumero: string, valor: number): void {
      const origem = this.buscarConta(origemNumero);
      const destino = this.buscarConta(destinoNumero);
      origem.transferir(destino, valor);
    }
  }
  
  function questao3(): void {
    try {
      const c1 = new Conta("111-1", 0);
      const c2 = new Conta("222-2", 0);
      
      c1.transferir(c2, 100);
    } catch (error) {
      console.error("Questão 3 - Erro:", error.message);
    }
    /* Questão03: 
    Quando tentamos realizar uma transferência de um valor maior que o saldo disponível, o sistema deve 
    lançar uma exceção informando que o saldo é insuficiente. O erro ocorre porque a conta de origem não 
    possui fundos suficientes para cobrir o valor solicitado, o que impede a transferência. A exceção
    gerada pode ser capturada e tratada para garantir que o programa continue funcionando corretamente 
    e forneça um feedback claro ao usuário sobre o problema (por exemplo, "Saldo insuficiente").   
    Isso ocorre, normalmente, com o uso de uma verificação de saldo antes de realizar a transferência.
    */
  }
  
  // Questão 4 
  function questao4(): void {
    try {
      const app = new App();
      const c1 = new Conta("123-1", 0);
      const c2 = new Conta("256-2", 0);
  
      app.inserirConta(c1);
      app.inserirConta(c2);
  
      app.transferir("123-1", "256-2", 100); 
    } catch (error) {
      console.error("Questão 4 - Erro propagado:", error.message);
    }
    /*
     Quando o valor transferido é maior que o saldo disponível, uma exceção é lançada.
    Ela deve ser propagada para os métodos conta.transferir(), banco.transferir() e App.menu()
    para garantir que o erro seja tratado adequadamente. A confiabilidade da implementação 
    depende de como as exceções são geridas sem quebrar o fluxo do programa.
    */
  }
  
  // Questão 5 
  function questao5(): void {
    try {
      const app = new App();
      const c1 = new Conta("123-1", 0);
      const c2 = new Conta("256-2", 0);
  
      app.inserirConta(c1);
      app.inserirConta(c2);
  
      app.transferir("123-1", "256-2", 100); 
    } catch (error) {
      console.error("Questão 5 - Erro:", error.message);
    }
    /*
    O método validaValor(valor) deve garantir que o valor não seja negativo ou inválido.
    Deve ser chamado no construtor da classe Conta e nos métodos de sacar e depositar.
    O tratamento adequado de erros e a validação previnem transações incorretas, tornando 
    o sistema mais seguro e confiável.
    */
  }
  
  