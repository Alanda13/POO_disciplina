class Jogador{
    forca : number;
    nivel : number;
    pontos_atuais: number;

    constructor(forca: number, nivel: number, pontos_atuais: number){
        this.forca = forca;
        this.nivel = nivel;
        this.pontos_atuais = pontos_atuais;
    }
    calcularAtaque(): number{
        return this.forca * this.nivel;   //dano de ataque do jogador
    }
    atacar(atacado: Jogador): void{
        if (!atacado.estaVivo()){
            console.log(`${atacado.toString()} já está morto.`);
            return;
        } 
        const dano = this.calcularAtaque();
        atacado.pontos_atuais -= dano;
        console.log(`${this.toString()} atacou ${atacado.toString}`)
    }
    estaVivo(): boolean{
        return this.pontos_atuais > 0;
    }
    toString(): string{   //retorna a representação textual do jogador concatenando todos os seus atributos.
        return `Jogador [Força: ${this.forca}, Nível: ${this.nivel}, Pontos: ${this.pontos_atuais}]`;
 
    }
}
function main(): void{
    const jogador1 = new Jogador(10, 2, 50);
    const jogador2 = new Jogador(8, 3, 60);

    console.log("Inicio:");
    console.log(jogador1.toString());
    console.log(jogador2.toString());

    jogador1.atacar(jogador2);

    console.log(jogador1.toString());
    console.log(jogador2.toString());

    jogador2.atacar(jogador1);

    if (jogador1.pontos_atuais > jogador2.pontos_atuais) {
        console.log("Jogador 1 tem mais pontos.");
      } else if (jogador2.pontos_atuais > jogador1.pontos_atuais) {
        console.log("Jogador 2 tem mais pontos.");
      } else {
        console.log("Ambos têm a mesma quantidade de pontos.");
      }

}
main();