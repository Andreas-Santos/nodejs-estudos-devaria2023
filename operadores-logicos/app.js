const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

console.log('Este programa serve para checar se o cliente é maior de idade e se possuí habilitação para pilotar o kart');
console.log('Além disto precisamos checar se o cliente está na lista de presença');

readline.question('Você nasceu em qual ano?', ano => {
    if(ano > 2005){
        console.log('Você é menor de idade, portanto não pode pilotar o kart');
    }else{
        readline.question('Você tem habilitação?', temHabilitacao => {
            if(!(temHabilitacao.toUpperCase() === "SIM")){
                console.log('Você não tem habilitação, portanto não pode pilotar o kart');
            }else{
                readline.question('Qual o seu nome?', nome => {
                    switch(nome){
                        case 'Andreas' :
                            console.log('Bem-vindo ao kart, Andreas!');
                            break;
                        case 'Bianca' :
                            console.log('Bem-vinda ao kart, Bianca!');
                            break;
                        case 'Bruna' :
                            console.log('Bem-vinda ao kart, Bruna!');
                            break;
                        default :
                            console.log(`Sinto muito, seu nome não está na lista ${nome}`);
                            break;
                    }
                });
            }
        });
    }
});