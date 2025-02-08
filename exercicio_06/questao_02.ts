class Hora {
    private hora: number;
    private minutos: number;
    private segundos: number;

    constructor(hora: number, minutos: number, segundos: number) {
        this.hora = hora;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    public getHora(): number {
        return this.hora;
    }

    public getMinutos(): number {
        return this.minutos;
    }

    public getSegundos(): number {
        return this.segundos;
    }

    public formatarHora(): string {
        const pad = (num: number) => num.toString().padStart(2, '0');
        return `${pad(this.hora)}:${pad(this.minutos)}:${pad(this.segundos)}`;
    }
}

