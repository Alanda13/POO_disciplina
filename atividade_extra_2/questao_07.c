#include <stdio.h>

typedef struct {
    int volume; 
} ControleDeAudio;

void inicializar(ControleDeAudio* controle) {
    controle->volume = 2; // Inicializa o volume com 2
}

void aumentarVolume(ControleDeAudio* controle) {
    if (controle->volume < 10) { // Se o volume for menor que 10
        controle->volume++; // Incrementa o volume em 1
    }
}

void diminuirVolume(ControleDeAudio* controle) {
    if (controle->volume > 0) { // Se o volume for maior que 0
        controle->volume--; // Decrementa o volume em 1
    }
}

int lerVolume(ControleDeAudio* controle) {
    return controle->volume; // Retorna o valor atual do volume
}

int main() {
    ControleDeAudio controle; 
    inicializar(&controle); 

    aumentarVolume(&controle); 
    aumentarVolume(&controle); 
    printf("Volume atual: %d\n", lerVolume(&controle)); 

    diminuirVolume(&controle); 
    printf("Volume atual: %d\n", lerVolume(&controle)); 

    return 0; 
}
