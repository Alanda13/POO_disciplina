var Cliente = /** @class */ (function () {
    function Cliente(id, nome, cpf, data_nascimento, contas) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.data_nascimento = data_nascimento;
        this.contas = contas;
    }
    return Cliente;
}());
var Conta = /** @class */ (function () {
    function Conta(numero, saldo, id, cliente) {
        this.numero = numero;
        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
    }
    return Conta;
}());
var Banco = /** @class */ (function () {
    function Banco() {
        this.clientes = [];
        this.contas = [];
    }
    Banco.prototype.inserirCliente = function (cliente) {
        this.clientes.push(cliente);
    };
    //consulta de cliente através do cpf
    Banco.prototype.consultarCliente = function (cpf) {
        for (var _i = 0, _a = this.clientes; _i < _a.length; _i++) {
            var cliente = _a[_i];
            if (cliente.cpf === cpf) {
                return cliente;
            }
        }
        console.log("Cliente não encontrado!");
        return undefined;
    };
    Banco.prototype.consultarConta = function (numero) {
        var conta = this.contas.find(function (conta) { return conta.numero === numero; });
        if (!conta) {
            console.log("Conta com n\u00FAmero ".concat(numero, " n\u00E3o encontrada."));
            return undefined;
        }
        return conta;
    };
    Banco.prototype.associarClienteConta = function (numeroConta, cpf_cliente) {
        var cliente_selecionado = this.consultarCliente(cpf_cliente);
        var conta_selecionada = this.consultarConta(numeroConta);
        if (!conta_selecionada) {
            console.log("ERRO!CONTA COM N\u00DAMERO ".concat(numeroConta, " N\u00C3O FOI ENCONTRADA!!!!!"));
            return;
        }
        if (!cliente_selecionado) {
            console.log("ERRO1 CLIENTE COM O CPF ".concat(cpf_cliente, " N\u00C3O FOI ENCONTRADO!!!!1"));
            return;
        }
        if (conta_selecionada.cliente) {
            console.log("ERRO!! A CONTA ".concat(conta_selecionada.numero, "J\u00C1 EST\u00C1 ASSOCIADA AO CLIENTE ").concat(conta_selecionada, "!!!"));
            return;
        }
        conta_selecionada.cliente = cliente_selecionado;
        cliente_selecionado.contas.push(conta_selecionada);
        console.log("Cliente ".concat(cliente_selecionado.nome, " associado a conta ").concat(numeroConta, "."));
    };
    Banco.prototype.Listar_contas_cliente = function (cpf) {
        var cliente = this.consultarCliente(cpf);
        return cliente.contas;
    };
    Banco.prototype.totalizar_saldo_cliente = function (cpf) {
        var contas_cliente_selecionadas = this.Listar_contas_cliente(cpf);
        if (!contas_cliente_selecionadas || contas_cliente_selecionadas.length === 0) {
            console.log('NENHUMA CONTA ENCONTRADA!');
            return 0;
        }
        return contas_cliente_selecionadas.reduce(function (total, conta) { return total + conta.saldo; }, 0);
    };
    Banco.prototype.inserir_conta = function (conta) {
        this.contas.push(conta);
    };
    Banco.prototype.consultar_por_indice = function (numero) {
        var indice = -1;
        for (var i = 0; i < this.contas.length; i++) {
            if (this.contas[i].numero == numero) {
                indice = i;
                break;
            }
        }
        return indice;
    };
    Banco.prototype.excluir = function (numeroConta) {
        var indice = this.consultar_por_indice(numeroConta);
        if (indice != -1) {
            for (var i = indice; i < this.contas.length - 1; i++) {
                this.contas[i] = this.contas[i + 1];
            }
            this.contas.pop();
        }
    };
    Banco.prototype.sacar = function (numeroConta, valor) {
        var conta = this.consultarConta(numeroConta);
        if (conta) {
            conta.saldo -= valor;
        }
    };
    Banco.prototype.depositar = function (numeroConta, valor) {
        var conta = this.consultarConta(numeroConta);
        if (conta) {
            conta.saldo += valor;
        }
    };
    Banco.prototype.tranferir = function (numeroConta_depos, numeroConta_dest, valor) {
        var conta_depos = this.consultarConta(numeroConta_depos);
        var conta_dest = this.consultarConta(numeroConta_dest);
        if (conta_depos && conta_dest) {
            conta_depos.saldo -= valor;
            conta_dest.saldo += valor;
        }
    };
    return Banco;
}());