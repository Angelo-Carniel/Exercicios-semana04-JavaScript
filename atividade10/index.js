const contasClientes = [
    {id: 1, saldo: 500},
    {id: 2, saldo: 30000},
    {id: 3, saldo: 50},
    ];




let banco = () => {
    console.log("Bem vindo ao banco 'Dev'");
    console.log('digite "1" para saques e "2" para depositos');

    let procedimento = prompt('digite "1" para saques e "2" para depositos');
    
    switch(procedimento) {
        
        case'1':
        saque();
        break;

        case'2':
        deposito();
        break;

        default:
            console.log("Procedimento não existe");
    }
   
}
banco();


function saque (idUsuario, saque) {
    
    idUsuario = window.prompt("Insira seu id:");
    saque = window.prompt("Valor do saque:");


    contasClientes.forEach(function(usuario) {
        if(idUsuario == usuario.id){
            let n = 1
            while(n == 1){
                if(saque > usuario.saldo){
                    console.log("Valor exedido")
                 n++
                }else{
                    usuario.saldo -= saque;
                
                    console.log(`Saque de ${saque.toLocaleString('pt-BR',{style : 'currency', currency:'BRL'})} efetuado`);
                    console.log(`Saldo atual de ${usuario.saldo.toLocaleString('pt-BR',{style : 'currency', currency:'BRL'})}`);
                    n++
            }
            }
        }
    });
    
}

function deposito (idUsuario, deposito) {
    
    idUsuario = window.prompt("Insira seu id:");
    deposito = window.prompt("Valor a ser depositado:");

        contasClientes.forEach(function(usuario) {
            if(idUsuario == usuario.id){
                let n = 1
                while(n == 1){
                    if(deposito <= 0){
                        console.log("Valor exedido")
                        n++
                    }else{
                        usuario.saldo += parseInt(deposito);
                
                        console.log(`Deposito de ${deposito.toLocaleString('pt-BR',{style : 'currency', currency:'BRL'})} efetuado`);
                        console.log(`Saldo atual de ${usuario.saldo.toLocaleString('pt-BR',{style : 'currency', currency:'BRL'})}`);
                    n++;
            }
            }
        }
    });
}