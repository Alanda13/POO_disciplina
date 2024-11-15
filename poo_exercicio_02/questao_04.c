// 4. Pesquise e exemplifique com um exemplo porque dizemos que a linguagem C,
//mesmo tendo tipagem estática, possui tipagem fraca.

// A linguagem C é dita de tipagem fraca porque, mesmo possuindo tipagem estática,
//permite operações que podem "quebrar" os tipos definidos, 
//especialmente ao usar conversões implícitas ou o uso de ponteiros. 
//Essa característica permite que dados de um tipo sejam tratados como se fossem de outro,
// o que, se não for controlado, pode gerar comportamentos inesperados ou erros de execução.

//Exemplo com ponteiros:
#include <stdio.h>

int main() {
    int a = 65;
    char *p = (char *)&a;  

    printf("Valor de p: %c\n", *p);  

    return 0;
}

// "a" é uma variável int, quando eu uso (char *)&a, eu to dizendo que para o ompilador tratar o endereço de a
// como se fosse um ponteiro para char. Quando é imprimido *p, ele interpreta o valor de a como um char, resultando
// no caractere 'A', que corresponde ao valor 65 na tabela ASCII.
