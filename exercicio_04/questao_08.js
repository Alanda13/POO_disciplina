var Equipamento = /** @class */ (function () {
    function Equipamento() {
        this.ligado = false;
    }
    Equipamento.prototype.liga = function () {
        if (!this.ligado) {
            this.ligado = true;
            console.log('O equipamento foi ligado!!');
        }
        else {
            console.log('O equipamento já está ligado!!');
        }
    };
    Equipamento.prototype.desliga = function () {
        if (this.ligado) {
            this.ligado = false;
            console.log('O equipamento foi desligado!');
        }
        else {
            console.log('O equipamento já está desligado');
        }
    };
    Equipamento.prototype.inverte = function () {
        this.ligado = !this.ligado;
        console.log("O equipamento est\u00E1 ".concat(this.ligado ? "ligado" : "desligado"));
    };
    Equipamento.prototype.esta_ligado = function () {
        return this.ligado;
    };
    return Equipamento;
}());
function main() {
    var equipamento = new Equipamento();
    console.log("Status inicial:", equipamento.esta_ligado());
    equipamento.liga();
    console.log("Status após ligar:", equipamento.esta_ligado());
    equipamento.desliga();
    equipamento.inverte();
    console.log("Status após inverter:", equipamento.esta_ligado());
}
