//Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
//calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
//ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

class Circulo{
    raio: number = 0;

    calcular_area(): number {
        return Math.PI * this.raio * this.raio; //calculo area circulo
    }
    calcular_perimetro(): number{
        return 2 * Math.PI * this.raio; //calculo perimetro circulo
    }
    }
function main(){
    const circulo = new Circulo();
    circulo.raio = 7;

    const area = circulo.calcular_area();
    const perimetro = circulo.calcular_perimetro();

    console.log(`Área do circulo: ${area.toFixed(2)}`); 
    console.log(`Perímetro do circulo: ${perimetro.toFixed(2)}`);

}
main();
