console.log("Conversão de tipos");

console.log("Ano " + 2024);
console.log("2" + "2"); // Não faz soma, apenas concatena as duas strings.
console.log(parseInt("2") + parseInt("2"));

console.log("10" / "2"); //Nesse caso irá funcionar pois implicitamente o JS converte os textos para número.
console.log("André" / "2"); //Nesse caso o complilador retornará NaN (Not a Number).
console.log(6.5); //Declara-se números decimais sempre com ponto (Ponto flutuate ou float)
console.log(6, 5); //Dessa maneira ointerpretador JS vai identificar o 6 e o 5 como caracteres distintos, uma vez que a virgula serve como separador.
