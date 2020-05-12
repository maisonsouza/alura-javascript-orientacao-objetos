import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Maison";
cliente1.cpf = 98225723287;

const cliente2 = new Cliente();
cliente2.nome = "Jose";
cliente2.cpf = 88716074220;

const contaCorrenteMaison = new ContaCorrente();
contaCorrenteMaison.agencia = 1001;
contaCorrenteMaison.cliente = cliente1;

const contaCorrenteJose = new ContaCorrente();
contaCorrenteJose.agencia = 1002;
contaCorrenteJose.cliente = cliente2;

// Movimentações
contaCorrenteMaison.depositar(120)
contaCorrenteJose.depositar(170);
const valorSacado = contaCorrenteMaison.sacar(50);
console.log(valorSacado)
contaCorrenteMaison.sacar(80);
let valor = 25;
contaCorrenteMaison.transferir(valor,contaCorrenteJose)
console.log("valor",valor)
console.log(cliente1);
console.log(cliente2);
console.log(contaCorrenteMaison);
console.log(contaCorrenteJose.cliente.getSazx);
