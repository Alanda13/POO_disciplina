//Reescreva o exemplo abaixo, mantendo a quebra de linhas usando template
//strings e os valores Ely, 120.56 e TypeScript venham de variáveis declaradas
//separadamente e “interpoladas” na string:

let x : string = 'Ely';
let y : number = 120.56;
let z : string = 'TypeScript';

let message = `${x}
My payment time is ${y}
and
my preffered language is ${z}`

console.log(message);