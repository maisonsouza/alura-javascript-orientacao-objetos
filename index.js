import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

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
