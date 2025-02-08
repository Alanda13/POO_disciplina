function formatando_arrays(array: number[]): string{
    let resultado:string = "";
    array.forEach((numero,index) => {
        resultado += numero;
        if (index < array.length - 1){
            resultado += "-";
        }
    });
    return resultado;

}
function main():void{
    const numeros: number[] = [1, 2, 3, 4, 5];
    const resultado: string = formatando_arrays(numeros);
    console.log(resultado);
}
main()