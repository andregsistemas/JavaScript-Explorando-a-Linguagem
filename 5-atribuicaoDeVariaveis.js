console.log("Trabalhando com atribuição de variáveis");
const idade = 29;
const primeiroNome = "André";
const sobreNome = "Gonçalves";

console.log(primeiroNome + sobreNome); //Juntará o nome e o sobrenome juntos, "AndréGonçalves".
console.log(primeiroNome + " " + sobreNome); //Juntará o nome, string com espaço e o sobrenome juntos, "André Gonçalves".
console.log(primeiroNome, sobreNome); //Separa o nome e o sobrenome atraves da vírgula,"André Gonçalves".
console.log(`Meu nome é ${primeiroNome} ${sobreNome}`);

nomeCompleto = primeiroNome + " " + sobreNome; // concatena as variaveis e atualiza a variavel nome com o novo valor.

console.log(`Meu nome é ${nomeCompleto}`);
