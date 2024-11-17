# Atividade de poo

## 1. Assinale verdadeiro ou falso:
### (F) (F) (F) (V) (V) (V) (V)

## 2. Podemos afirmar que haverá um problema de compilação, pois a variável inteira não foi inicializada previamente? Justifique.
### Sim, em TypeScript os atributos de classe precisam ser inicializados antes de serem usados. No exemplo acima, o atributo quantReserva não foi inicializado e isso vai causar um erro. 

## 5.Considerando o uso da classe Conta apresentada em aula e seu uso:
### a. Qual o resultado dos dois "prints"? Justifique sua resposta.
#### Os dois prints terão valor 90 porque c1,c2 e c3 referenciam o mesmo objeto na memória(a conta 2).
### b. O que acontece com o objeto para o qual a referência c1 apontava?
#### O objeto para o qual c1 apontava originalmente não possui mais referências apontando para ele. Após a linha c1 = c2, a variável c1 passa a apontar para o mesmo objeto que c2. Sendo assim, ele se torna elegível para a coleta de lixo sendo removido da memória.




