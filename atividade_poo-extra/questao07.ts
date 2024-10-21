class Retangulo {
    l1: number = 0;
    l2: number = 0;

    // Método para calcular a área
    calcularArea(): number {
        return this.l1 * this.l2;
    }

    // Método para calcular o perímetro
    calcularPerimetro(): number {
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
