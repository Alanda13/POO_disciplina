// 4. Justifique o erro de compilação e proponha uma solução.

// O construtor da classe Radio foi definido para exigir um parâmetro (volume) obrigatório ao instanciar a classe.
//Porém, quando é criado a instância com new Radio(), nenhum argumento foi passado, gerando um erro.
// Minha solução: definir um valor padrão para o parâmetro volume no construtor.Assim, se nenhum valor for
// fornecido durante a instanciação, o valor padrão será utilizado.

class Radio {
    volume: number;
    constructor(volume : number = 0) {   // valor padrão será 0
        this.volume = volume;
    }
}

let r: Radio = new Radio();  
r.volume = 10;    
console.log(r.volume)