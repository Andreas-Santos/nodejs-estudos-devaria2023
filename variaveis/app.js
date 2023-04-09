const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

const constanteString = 'Minha primeira constante do tipo String';
console.log(constanteString);

let leituraDeCampo;

readline.question('Digite a sua idade:', input => {
    leituraDeCampo = input;
    console.log(`O usuário digitou: ${leituraDeCampo}`);
});