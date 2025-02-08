
import { Calculadora } from '../calculadora/calculadora';
import { CalculadoraCientifica } from '../calculadora/CalculadoraCientifica';

let calcul = new Calculadora(5, 3);
console.log('Soma:', calcul.soma()); 

let calcCientifica = new CalculadoraCientifica(2, 3);
console.log('Exponenciação:', calcCientifica.exponenciar()); 
