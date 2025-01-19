
class Produto {
    private id: number;
    private descricao: string;
    private quantidade: number;
    private valorUnitario: number;

    constructor(id: number, descricao: string, quantidade: number, valorUnitario: number) {
        this.id = id;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.valorUnitario = valorUnitario;
    }

    public getId(): number {
        return this.id;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public repor(quantidade: number): void {
        this.quantidade += quantidade;
    }

    public darBaixa(quantidade: number): void {
        if (quantidade > this.quantidade) {
            console.log("Quantidade insuficiente em estoque!");
        } else {
            this.quantidade -= quantidade;
        }
    }
}

// Classe ProdutoPerecivel
class ProdutoPerecivel extends Produto {
    private validade: Date;

    constructor(id: number, descricao: string, quantidade: number, valorUnitario: number, validade: Date) {
        super(id, descricao, quantidade, valorUnitario);
        this.validade = validade;
    }

    public estaValido(): boolean {
        const hoje = new Date();
        return this.validade > hoje;
    }

    public repor(quantidade: number): void {
        if (!this.estaValido()) {
            console.log("Produto vencido! Não é possível repor estoque.");
        } else {
            super.repor(quantidade);
        }
    }

    public darBaixa(quantidade: number): void {
        if (!this.estaValido()) {
            console.log("Produto vencido! Não é possível dar baixa no estoque.");
        } else {
            super.darBaixa(quantidade);
        }
    }

    public getValidade(): Date {
        return this.validade;
    }
}

// Classe Estoque
class Estoque {
    private produtos: (Produto | ProdutoPerecivel)[];

    constructor() {
        this.produtos = [];
    }

    public inserir(produto: Produto | ProdutoPerecivel): void {
        if (this.existe(produto.getId(), produto.getDescricao())) {
            console.log("Produto com ID ou descrição já existe!");
        } else {
            this.produtos.push(produto);
        }
    }

    public consultar(id: number): Produto | ProdutoPerecivel | undefined {
        return this.produtos.find(produto => produto.getId() === id);
    }

    public excluir(id: number): void {
        const index = this.produtos.findIndex(produto => produto.getId() === id);
        if (index !== -1) {
            this.produtos.splice(index, 1);
        } else {
            console.log("Produto não encontrado!");
        }
    }

    public repor(id: number, quantidade: number): void {
        const produto = this.consultar(id);
        if (produto) {
            produto.repor(quantidade);
        } else {
            console.log("Produto não encontrado!");
        }
    }

    public darBaixa(id: number, quantidade: number): void {
        const produto = this.consultar(id);
        if (produto) {
            produto.darBaixa(quantidade);
        } else {
            console.log("Produto não encontrado!");
        }
    }

    public listarPereciveisVencidos(): ProdutoPerecivel[] {
        return this.produtos
            .filter(produto => produto instanceof ProdutoPerecivel && !(produto as ProdutoPerecivel).estaValido())
            .map(produto => produto as ProdutoPerecivel);
    }

    public existe(id: number, descricao: string): boolean {
        return this.produtos.some(produto => produto.getId() === id || produto.getDescricao() === descricao);
    }
}

const estoque = new Estoque();
const produto1 = new Produto(1, "Produto A", 10, 5.0);
const produto2 = new ProdutoPerecivel(2, "Produto B", 20, 3.0, new Date("2025-01-01"));
const produto3 = new ProdutoPerecivel(3, "Produto C", 5, 8.0, new Date("2023-01-01"));

estoque.inserir(produto1);
estoque.inserir(produto2);
estoque.inserir(produto3);

console.log("Produtos vencidos:", estoque.listarPereciveisVencidos());
