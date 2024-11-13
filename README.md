# 1. Qual a diferença entre tipagem dinâmica e tipagem estática?
## A tipagem dinâmica permite que a mesma variável possa receber valores de tipos diferentes ao longo da execução do código. Enquanto a tipagem estática não permite ao desenvolvedor alterar o tipo da variável depois de declarada.

# 2. Qual o principal problema do uso de tipagem dinâmica?
## É a maior probabilidade de erros em tempo de execução. Em linguagens com tipagem dinâmica, o tipo de uma variável é determinado apenas quando o código é executado. Isso traz flexibilidade, mas também aumenta o risco de erros que só são identificados quando o código está em uso. 

# 3. Pesquise um exemplo na internet em que a tipagem dinâmica pode ser problemático.
## Um exemplo comum de problema com tipagem dinâmica ocorre ao tentar fazer operações matemáticas com variáveis cujos tipos não são os esperados. Em JavaScript, por exemplo, o operador + pode ser usado tanto para adição quanto para concatenação de strings. Se uma variável numérica for inadvertidamente usada junto com uma string, o resultado pode ser inesperado

# 5.Poderíamos dizer que a tipagem do TypeScript é fraca por uma variável do tipo number aceitar tanto inteiros como ponto flutuante?
## Não, não podemos considerar a tipagem do TypeScript como fraca apenas porque uma variável do tipo number aceita tanto inteiros quanto números de ponto flutuante. Isso ocorre porque, em TypeScript (e JavaScript), o tipo number abrange tanto inteiros quanto valores de ponto flutuante, assim como em outras linguagens fortemente tipadas, como Python e Java.