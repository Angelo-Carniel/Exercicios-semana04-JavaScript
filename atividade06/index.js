let impares = 0;


while (impares <= 10) {

    for(count = 0; count <=10; count++){
        if(count % 2 == 1){
            impares = count + impares;
            console.log(count);
        }
    }
}