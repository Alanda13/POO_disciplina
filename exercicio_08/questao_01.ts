// Enumere os 3 tipos mais comuns de tratamento de erros e exemplifique com
// códigos seus ou pesquisados na internet.

// 1- Desconsiderar a operação: Verifica uma condição, mas não informa claramente 
// o sucesso ou a falha. Em geral, se a condição não for atendida, a operação é ignorada silenciosamente.
// EXEMPLO: Um sistema de cadastro que não adiciona um item à lista se ele já existir.

class Cadastro {
    private usuarios: string[] = [];

    adicionarUsuario(usuario: string): void {
        if (!this.usuarios.includes(usuario)) {
            this.usuarios.push(usuario);
        }
    }

    listarUsuarios(): string[] {
        return this.usuarios;
    }
}

const cadastro = new Cadastro();
cadastro.adicionarUsuario("João");
cadastro.adicionarUsuario("João"); 
console.log(cadastro.listarUsuarios()); 

// 2- Exibir uma mensagem de erro
// EXEMPLO: Validação de entrada para idade mínima em um formulário.

class Formulario {
    validarIdade(idade: number): void {
        if (idade < 18) {
            console.log("Idade mínima para cadastro é 18 anos.");
        } else {
            console.log("Cadastro permitido.");
        }
    }
}

const formulario = new Formulario();
formulario.validarIdade(16); 
formulario.validarIdade(20); 

// 3- Retornar um código de erro
// EXEMPLO: Verificação de estoque em um sistema de vendas.

class Estoque2 {
    private itens: { [produto: string]: number } = {
        "camiseta": 10,
        "calça": 5
    };

    venderItem1(produto: string, quantidade: number): number {
        if (!this.itens[produto]) {
            return -1; // Produto não existe.
        } else if (this.itens[produto] < quantidade) {
            return 0; // Quantidade insuficiente.
        }

        this.itens[produto] -= quantidade;
        return 1; // Venda bem-sucedida.
    }
}

// 4- Exceções
// verifica se um número é positivo. Caso o número seja negativo, uma exceção é lançada.

function verificarNumeroPositivo(numero: number): void {
    if (numero < 0) {
        throw new Error("O número deve ser positivo.");
    }
    console.log("O número é positivo!");
}

try {
    verificarNumeroPositivo(-5); // lança uma exceção.
} catch (error) {
    console.error(error.message); 
}

try {
    verificarNumeroPositivo(10); // Não lança exceção.
} catch (error) {
    console.error(error.message);
}


