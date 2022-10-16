/*
1.- ¿ES UN ANAGRAMA?

 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

let pal1 = prompt('Ingresa primera palabra')
let pal2 = prompt('Ingresa segunda palabra')

function anagram(palabra1 = '', palabra2 = ''){

    let cont = 0

    if (palabra1 !== palabra2) {
        if (palabra1.length == palabra2.length) { // Hola.length == Halo.length?
            for (let i = 0; i < palabra1.length; i++) { // Hola: i0. H -> i1. a -> i2. l -> i3. o
                for (let j = 0; j < palabra2.length; j++) { // Halo: j0. H -> j1. a -> j2. l -> j3. o
                    if (palabra1[i] == palabra2[j]) { // iN == jN? 
                        console.log('If ', palabra1[i], palabra2[j]); // Yes? Perfect.
                        cont ++
                        console.log(cont);
                        break;
                    }
                }
            }

            if (cont == palabra1.length) {
                return true
            } else {
                return false
            }

        } else {
            return false
        }
    } else {
        return false
    }
}

console.log(pal1 + ' y ' + pal2 + ' son un anagrama? \n' + anagram(pal1, pal2)); 

/* 
    Hola && Halo = true
    Roma && Ramo = true
    Enrique && Quieren = true
    Halos && Hola = false
    Enamoramientos && Armoniosamente = true
    Magnetismo && Magnetismo = false
    Magneto && Magnetivo = false
    Hola && ' ' = false
*/