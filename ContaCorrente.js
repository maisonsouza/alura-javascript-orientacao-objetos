export class ContaCorrente {
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