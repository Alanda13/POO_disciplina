function main(): void {
    const array = [1, 2, 3, 4, 5];

    const dobrados = array.map((numero) => numero * 2); 
    const somaTotal = dobrados.reduce((acumulador, numero) => acumulador + numero, 0);

    console.log("Elementos dobrados:", dobrados);
    console.log("Soma total dos elementos dobrados:", somaTotal); 
}

main();
