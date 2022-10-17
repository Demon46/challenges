/*
2.- LA SUCESIÓN DE FIBONACCI

 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let num1 = 0
let num2 = 1
let suma = 0
let limite = Number(prompt('Ingresa el limite que quieres para la sucesión: '))
let i = 2
let sucesion = [String(num1), String(num2)]


while (suma <= limite) {

    suma = num1 + num2

    sucesion[i] = suma
    i++

    num1 = num2
    num2 = suma

}

sucesion.pop()
console.log('La sucesión de Fibonacci hasta el numéro ' + limite + ' es: ' + sucesion.toString());




    


    

