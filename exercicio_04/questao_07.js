var Triangulo = /** @class */ (function () {
    function Triangulo(lado1, lado2, lado3) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }
    Triangulo.prototype.ehTriangulo = function () {
        return (Math.abs(this.lado2 - this.lado3) < this.lado1 && this.lado1 < this.lado2 + this.lado3 &&
            Math.abs(this.lado1 - this.lado3) < this.lado2 && this.lado2 < this.lado1 + this.lado3 &&
            Math.abs(this.lado1 - this.lado2) < this.lado3 && this.lado3 < this.lado1 + this.lado2);
    };
    Triangulo.prototype.ehIsosceles = function () {
        if (!this.ehTriangulo())
            return false;
        return (this.lado1 === this.lado2 ||
            this.lado1 === this.lado3 ||
            this.lado2 === this.lado3);
    };
    Triangulo.prototype.ehEquilatero = function () {
        if (!this.ehTriangulo())
            return false;
        return this.lado1 === this.lado2 && this.lado2 === this.lado3;
    };
    Triangulo.prototype.ehEscaleno = function () {
        if (!this.ehTriangulo())
            return false;
        return (this.lado1 !== this.lado2 &&
            this.lado1 !== this.lado3 &&
            this.lado2 !== this.lado3);
    };
    return Triangulo;
}());
function main() {
    var triangulo1 = new Triangulo(5, 5, 5);
    console.log(triangulo1.ehTriangulo());
    console.log(triangulo1.ehIsosceles());
    var triangulo2 = new Triangulo(1, 2, 3);
    console.log(triangulo2.ehTriangulo());
    console.log(triangulo2.ehEscaleno());
}
main();
