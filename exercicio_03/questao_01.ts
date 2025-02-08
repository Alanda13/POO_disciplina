// 1. Crie uma função que recebe como parâmetro um número e retorna true se o
//número for par e false se for ímpar.

function main(){
    let numero:number = 51;
    let resultado:Boolean = par_ou_impar(numero);

    console.log(`${numero} é ${resultado ?"par":"impar"}`)
}

function par_ou_impar(numero : number): Boolean{
    if(numero%2 == 0){
        return true;
    }else{
        return false;
    }
}
main()