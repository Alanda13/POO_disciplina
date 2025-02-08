
import { Calculadora } from './calculadora';

export class CalculadoraCientifica extends Calculadora {
    constructor(operando1: number, operando2: number) {
        super(operando1, operando2);
    }

    public exponenciar(): number {
        return Math.pow(this.getOperando1(), this.getOperando2());
    }
}
