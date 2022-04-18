function adicao (num1, num2, resultado){
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    resultado = num1 + num2;
    
    return (`${num1} + ${num2} = ${resultado}`);
    
}

function subtracao (num1, num2, resultado){
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    resultado = num1 - num2;
    
    return (`${num1} - ${num2} = ${resultado}`);
    
}

function divisao (num1, num2, resultado){
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    resultado = num1 / num2;
    
    if(resultado > 0){
        return (`${num1} / ${num2} = ${resultado.toFixed(2)}`);
    }
}

function multiplicacao (num1, num2, resultado){
    num1 = Math.floor(Math.random() * 100);
    num2 = Math.floor(Math.random() * 100);
    resultado = num1 * num2;
    
    if(resultado > 0){
        return  (`${num1} x ${num2} = ${resultado}`);
    }
}

const operacao = '1'; //window.prompt('Digite "1" p/ adição, "2" p/ subtração, "3" p/ divisão e "4" p/ multiplicação');
switch (operacao) {
    //Caso queira usar com window.prompt, utilizar "break;" ao final da case.
    //Se for interagir como usúario trocar "console.log()" por "window.prompt()".
    case '1':
        console.log(adicao());
        //break;
    case '2':
        console.log(subtracao());
        //break;
    case '3':
        console.log(divisao());
        //break;
    case '4': 
        console.log(multiplicacao());
        break;
        
    default:
        console.log('Desculpa, aconteceu algum erro.')
}