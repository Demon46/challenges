/*
0.- EL FAMOSO FIZZ BUZZ

 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 1; i <= 100; i++) {

    let val = i

    if ((i % 3 == 0) && (i % 5 == 0)) {
        val = 'Fizzbuzz'
        console.log(val);

    } else if( i % 3 == 0 ){
        val = 'Fizz'
        console.log(val);

    } else if( i % 5 == 0){
        val = 'Buzz'
        console.log(val);

    } else {
        console.log(val);
        
    }
}