import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Maison",98225723287);
const cliente2 = new Cliente("Jose",88716074220);

const contaCorrenteMaison = new ContaCorrente(cliente1,1001);
const contaCorrenteJose = new ContaCorrente(cliente2,1002);

// Movimentações
contaCorrenteMaison.depositar(120)
contaCorrenteJose.depositar(170);
const valorSacado = contaCorrenteMaison.sacar(50);
console.log(valorSacado);
contaCorrenteMaison.sacar(80);

console.log(cliente1);
console.log(cliente2.cpf);
console.log(contaCorrenteMaison);
console.log(contaCorrenteJose);
