fahrenheit = [ 0, 32, 45, 50, 75, 80, 99, 120 ];
celcius = fahrenheit.map(function(fahrenheit){
    return Math.round(( fahrenheit - 32 ) * 5 / 9 );
}); 

console.log(celcius);