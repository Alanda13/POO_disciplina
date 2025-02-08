class Equipamento{
    private ligado: boolean;

    constructor(){
        this.ligado = false;
    }
    liga(): void{
        if (!this.ligado){
            this.ligado= true;
            console.log('O equipamento foi ligado!!')
        }else{
            console.log('O equipamento já está ligado!!')
        }
    }
    desliga():void{
        if(this.ligado){
            this.ligado = false;
            console.log('O equipamento foi desligado!')
        }else{
            console.log('O equipamento já está desligado')
        }
    }
    inverte():void{
        this.ligado = !this.ligado;
        console.log(`O equipamento está ${this.ligado ? "ligado": "desligado"}`)
    }
    esta_ligado():boolean{
        return this.ligado
    }
}
function main(): void{
    const equipamento =  new Equipamento();

    console.log("Status inicial:", equipamento.esta_ligado()); 

    equipamento.liga();
    console.log("Status após ligar:", equipamento.esta_ligado()); 

    equipamento.desliga(); 
    equipamento.inverte(); 
    console.log("Status após inverter:", equipamento.esta_ligado()); 
}