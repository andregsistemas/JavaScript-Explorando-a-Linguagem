console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 20;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log(`Destinos diponiveis: ${listaDeDestinos}`);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
  if (listaDeDestinos[contador] == destino) {
    destinoExiste = true;
    break;
  }
  contador++; // contador += 1 / contador = contador + 1
}

console.log(`Destino: ${destinoExiste}`);

if (podeComprar && destinoExiste) {
  console.log("Boa viagem!");
} else {
  console.log("Desculpe tivemos um erro!");
}

for (let i = 0; i < 3; i++) {
  if (listaDeDestinos[i] == destino) {
    destinoExiste = true;
  }
}
