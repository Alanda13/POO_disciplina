class Saudacao{
    texto: string;
    destinatario: string;

    constructor(texto: string, destinatario: string){
        this.texto = texto;
        this.destinatario = destinatario;
    }
    obterSaudacao(): string{
        return `${this.texto}, ${this.destinatario}`
    }   
}
function main(): void{
    const saudacao: Saudacao = new Saudacao("Bom dia", "Messi");
    console.log(saudacao.obterSaudacao)
}