class Retangulo {
    l1: number = 0;
    l2: number = 0;
    
    calcularArea(): number {   // Método para calcular a área
        return this.l1 * this.l2;
    }
    calcularPerimetro(): number {   // Método para calcular o perímetro
        return 2 * (this.l1 + this.l2);
    }
    eh_Quadrado(): boolean {
        return this.l1 === this.l2   //se l1 for igual a l2 irá retornar verdadeiro
    }
}

function main() {
    const retangulo = new Retangulo();
    retangulo.l1 = 3;  
    retangulo.l2 = 5;  

    const area = retangulo.calcularArea();
    const perimetro = retangulo.calcularPerimetro();
    const ehquadrado = retangulo.eh_Quadrado();

    console.log(`Área do retangulo: ${area}`); 
    console.log(`Perímetro do retangulo: ${perimetro}`); 
    console.log(`O retângulo é um quadrado? ${ehquadrado}`);
}

main();