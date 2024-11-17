// 3. Adicione o construtor que aceite um parâmetro inteiro e faça a inicialização do atributo
//quantReservas.

class Hotel{
    quantReservas : number;

    constructor(quantReservas: number) {
        this.quantReservas = quantReservas; //inicializacao do atributo quantReservas
    }
    adicionarReserva(): void{   //metodo
        this.quantReservas++;
    }
}
let hotel1: Hotel = new Hotel(7);  //7 reservas
console.log(hotel1.quantReservas) 


