// Nossa primeira classe
class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    #saldo = 0;

    sacar(valor) {
        console.log("Sacando", valor, "reais ... ")
        if (this.#saldo >= valor) {
            this.#saldo -= valor;
            console.log("Saque realizado com sucesso");
            console.log("Saldo = R$", this.#saldo, "\n");
            return valor;
        } else {
            console.log("Saldo em conta insuficiente para o saque\n");
        }
    }

    depositar(valor) {
        console.log("Depositando", valor, "reais ... ")
        if (valor <= 0) {
            return
        } else {
            this.#saldo += valor;
            console.log("Depósito realizado com sucesso");
            console.log("Saldo = R$", this.#saldo, "\n");
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Maison";
cliente1.cpf = 98225723287;

const cliente2 = new Cliente();
cliente2.nome = "Jose";
cliente2.cpf = 88716074220;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;

// Movimentações
contaCorrenteRicardo.depositar(120);
const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado)
contaCorrenteRicardo.sacar(80);

console.log(cliente1);
console.log(cliente2)
