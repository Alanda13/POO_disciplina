class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    ehTriangulo(): boolean {
        return (
            Math.abs(this.lado2 - this.lado3) < this.lado1 && this.lado1 < this.lado2 + this.lado3 &&
            Math.abs(this.lado1 - this.lado3) < this.lado2 && this.lado2 < this.lado1 + this.lado3 &&
            Math.abs(this.lado1 - this.lado2) < this.lado3 && this.lado3 < this.lado1 + this.lado2
        );
    }

    ehIsosceles(): boolean {
        if (!this.ehTriangulo()) return false;
        return (
            this.lado1 === this.lado2 ||
            this.lado1 === this.lado3 ||
            this.lado2 === this.lado3
        );
    }

    ehEquilatero(): boolean {
        if (!this.ehTriangulo()) return false;
        return this.lado1 === this.lado2 && this.lado2 === this.lado3;
    }

    ehEscaleno(): boolean {
        if (!this.ehTriangulo()) return false;
        return (
            this.lado1 !== this.lado2 &&
            this.lado1 !== this.lado3 &&
            this.lado2 !== this.lado3
        );
    }
}

function main(): void {
    const triangulo1: Triangulo = new Triangulo(5, 5, 5);
    console.log(triangulo1.ehTriangulo());
    console.log(triangulo1.ehIsosceles());

    const triangulo2: Triangulo = new Triangulo(1, 2, 3);
    console.log(triangulo2.ehTriangulo());
    console.log(triangulo2.ehEscaleno());
}

main();
