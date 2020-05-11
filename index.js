// Nossa primeira classe
class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
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
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 120;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(80);
console.log(contaCorrenteRicardo.saldo);

console.log(cliente1);
console.log(cliente2)
