console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

/*

const idadeComprador = 15;
const estaAcompanhada = false;
console.log(`Destinos diponiveis, ${listaDeDestinos}`);
if (idadeComprador >= 18) {
  console.log("O comprador é maior de idade!");
  listaDeDestinos.splice(1, 1); //Removendo item
} else if (estaAcompanhada == true) {
    console.log("O comprador esta acompanhado!");
    listaDeDestinos.splice(1, 1); //Removendo item
} else {
    console.log("O comprador é menor de idade e não esta acompanhado!");
}

console.log(`Destinos diponiveis, ${listaDeDestinos}`);

*/

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log(`Destinos diponiveis, ${listaDeDestinos}`);
if (estaAcompanhada == true || idadeComprador >= 18) {
  console.log("Boa Viagem!");
  listaDeDestinos.splice(1, 1); //Removendo item
} else {
  console.log("O comprador é menor de idade e não esta acompanhado!");
}

console.log("Embarque: \n\n");

if (idadeComprador >= 18 && temPassagemComprada) {
  console.log("Boa Viagem");
} else {
  console.log("Você não pode embarcar!");
}

console.log(`Destinos diponiveis, ${listaDeDestinos}`);
