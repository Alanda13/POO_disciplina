# Explique por que cada um dos 3 métodos acima possui limitações de uso.

## 1. Desconsiderar operação:
### - Falta de feedback: Não há nenhuma indicação clara de que a operação foi ignorada.O usuário ou outro desenvolvedor que utilize o código pode ficar incerto sobre se a operação foi bem-sucedida. -  Dificuldade na depuração: Se algo der errado no fluxo do programa, pode ser difícil identificar por que a operação foi ignorada.

## 2. Exibir mensagem de erro
### - Dependência de interface de saída: Mensagens de erro exibidas diretamente no console ou na interface limitam o sistema àquele tipo de saída. - Erro não tratável: O erro é comunicado ao usuário, mas o fluxo do programa continua sem uma forma de corrigir ou recuperar automaticamente a operação.

## 3. Retornar um código de erro
### - Sobrecarga de tratamento: É necessário testar explicitamente o código de retorno em cada chamada de função para decidir o próximo passo, tornando o código mais prolixo e propenso a erros. - Confusão no uso de valores: Quando a função já precisa retornar um valor relacionado à operação, os códigos de erro podem entrar em conflito com valores válidos. 

## 4. Exceções
### - O uso excessivo de exceções pode tornar o código mais difícil de ler e depurar, especialmente se exceções forem usadas para controlar fluxos comuns de operação. 
