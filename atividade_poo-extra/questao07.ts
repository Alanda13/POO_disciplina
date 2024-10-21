//Considerando o exemplo da classe Retangulo dos slides, implemente um método
//adicional chamado que calcule o perímetro do retângulo. Teste os métodos do
//retângulo.
class Retangulo {
    l1: number = 0;
    l2: number = 0;
    
    calcularArea(): number {   // Método para calcular a área
        return this.l1 * this.l2;
    }
    calcularPerimetro(): number {   // Método para calcular o perímetro
        return 2 * (this.l1 + this.l2);
    }
}

function main() {
    const retangulo = new Retangulo();
    retangulo.l1 = 5;  
    retangulo.l2 = 3;  

    const area = retangulo.calcularArea();
    const perimetro = retangulo.calcularPerimetro();

    console.log(`Área do retangulo: ${area}`); 
    console.log(`Perímetro do retangulo: ${perimetro}`); 
}

main();
