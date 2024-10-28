class ControleDeAudio{
    volume: number = 2;

    AumentarVolume(){   //metodo aumentar volume
       if(this.volume <= 10){     //se o valor for menor ou igual a 10
        this.volume++;  //incrementa em um
       }
    }
    DiminuirVolume(){   //metodo diminuir volume
        if(this.volume > 0){ //se o valor for maior que zero
            this.volume--; //decrementa em um
        }
    }
    LerVolume(){  //metodo ler volume
       return this.volume;
    }
}

let controle: ControleDeAudio = new ControleDeAudio();

controle.AumentarVolume();
controle.AumentarVolume();
console.log(controle.LerVolume());

controle.DiminuirVolume();
console.log(controle.LerVolume());
