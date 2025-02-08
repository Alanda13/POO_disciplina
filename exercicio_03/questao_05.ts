function exibir(...elementos: string[]): void{
    elementos.forEach((elemento, index) => {
        console.log(`Elemento ${index + 1}: ${elemento}`);

    });
}
function main(): void{
    exibir("a", "b");
    exibir("a", "b", "c");
    exibir("a", "b", "c", "d");
}
main()