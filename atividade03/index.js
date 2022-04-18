window.alert('Vai dizer se é "par" ou "ímpar".')
num = window.prompt('Digite um número para verificar se é "par" ou "ímpar".') 

resultado = parseInt(num) % 2 == 0 ? console.log('É par') : console.log('É ímpar');
  