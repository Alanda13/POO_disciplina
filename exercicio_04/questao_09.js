var Conta = /** @class */ (function () {
    function Conta(numero, saldo) {
        this.numero = numero;
        this.saldo = saldo;
    }
    Conta.prototype.sacar = function (valor) {
        if (valor > this.saldo) {
            console.log("Saque de R$".concat(valor, " n\u00E3o realizado. Saldo insuficiente."));
            return false;
        }
        this.saldo -= valor;
        console.log("Saque de R$".concat(valor, " realizado com sucesso."));
        return true;
    };
    Conta.prototype.depositar = function (valor) {
        this.saldo += valor;
        console.log("Dep\u00F3sito de R$".concat(valor, " realizado com sucesso."));
    };
    Conta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    Conta.prototype.transferir = function (contaDestino, valor) {
        if (this.sacar(valor)) {
            contaDestino.depositar(valor);
            console.log("Transfer\u00EAncia de R$".concat(valor, " realizada com sucesso para a conta ").concat(contaDestino.numero, "."));
            return true;
        }
        console.log("Transfer\u00EAncia de R$".concat(valor, " n\u00E3o realizada. Saldo insuficiente."));
        return false;
    };
    return Conta;
}());
function main() {
    var conta1 = new Conta("001", 500);
    var conta2 = new Conta("002", 300);
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
