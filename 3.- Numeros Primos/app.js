/*
3.- ¿ES UN NÙMERO PRIMO?

 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
*/

let limite = 100

console.log(`Los numeros primos comprendidos entre 1 y ${limite} son: `);

// Ciclo que recorre todos los numeros de 0 a 100
for (let i = 0; i <= limite; i++) {

    // Condición que evalua si el numero actual es diferente de 1 y el residuo de la division entre si mismo y entre 1 es igual a 0
    if (i % 1 == 0 && i % i == 0 && i !== 1) {

        // Condición que evalua si el residuo del numero actual entre los primeros numeros primos (2, 3, 5, 7, 11, 13) es 0, siempre y cuando el numero actual no sea igual a uno de los numeros primos mencionados
        if((i % 2 == 0 && i !== 2) || (i % 3 == 0 && i !== 3) || (i % 5 == 0 && i !== 5) || (i % 7 == 0 && i !== 7) || (i % 11 == 0 && i !== 11) || (i % 13 == 0 && i !== 13)){

            //console.log(`${i} NO es primo`);

        } else {
            
            // Imprime los numeros primos
            console.log(`${i}`);

        }

    }

}