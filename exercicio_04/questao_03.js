// 3. Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
//quantReservas.
var Hotel = /** @class */ (function () {
    function Hotel(quantReservas) {
        this.quantReservas = quantReservas; //inicializacao 
    }
    Hotel.prototype.adicionarReserva = function () {
        this.quantReservas++;
    };
    return Hotel;
}());
var hotel1 = new Hotel(7); //7 reservas
console.log(hotel1.quantReservas);
