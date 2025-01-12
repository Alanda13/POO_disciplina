class Veiculo{
    private placa: string;
    private ano: number;

    constructor(placa:string, ano:number){
        this.placa = placa;
        this.ano = ano;
    }
}

class Carro extends Veiculo{
    private modelo: string;
    constructor(placa: string, ano: number, modelo:string){
        super(placa, ano);
        this.modelo = modelo;
    }
}
class CarroEletrico extends Carro{
    private autonomiaBateria: number;
    constructor(placa: string, ano:number, modelo: string, autonomiaBateria: number){
        super(placa, ano, modelo);
        this.autonomiaBateria = autonomiaBateria;

    }
}