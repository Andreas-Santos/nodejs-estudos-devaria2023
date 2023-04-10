const readline = require('readline').createInterface({
    input : process.stdin,
    output: process.stdout
});

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if(!resultado){
        console.log('O número informado não é válido');
    }
    return resultado;
}

const validarOperador = (operador) => {
    switch(operador){
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;
        default:
            console.log('O operador informado não é válido');
            return null;
    }
}

readline.question('Digite um número:', (numero1) => {
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1) {
        readline.question('Digite outro número:', (numero2) => {
            const numeroValidado2 = validarNumeroInformado(numero2);

            if(numeroValidado2) {
                readline.question('Digite o operador:', (operador) => {
                    const operadorValidado = validarOperador(operador);
                    if(operadorValidado) {
                        switch(operadorValidado){
                            case '+': console.log(`operador selecionado "+": ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`operador selecionado "-": ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '/': console.log(`operador selecionado "/": ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '*': console.log(`operador selecionado "*": ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '%': console.log(`operador selecionado "%": ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                        }
                    }
                })
            }
        });
    }
});