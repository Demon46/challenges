/*
4.- ÁREA DE POLIGONO

 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

let pol = Number(prompt('Elige un poligono para calcular el área:\n\n 1.- Triangulo \n 2.- Cuadrado \n 3.- Rectangulo \n\n'))
let lado
let base
let altura
let res

function calcArea (poligono){

    if (poligono === 1) {
        
        alert('Escogiste el triangulo')

        base = Number(prompt('Ingresa la base'))

        altura = Number(prompt('Ingresa la altura'))

        res = (base * altura) / 2

        return `El área del triangulo es ${res}`

    } else if (poligono === 2){
        
        alert('Escogiste el cuadrado')

        lado = Number(prompt('Ingresa el lado'))

        res = lado * lado

        return `El área del cuadrado es ${res}`

    } else if (poligono === 3){

        alert('Escogiste el rectangulo')

        base = Number(prompt('Ingresa la base'))

        altura = Number(prompt('Ingresa la altura'))

        res = base * altura

        return `El área del rectangulo es ${res}`

    } else {

        return `ERROR: La opcion ingresada no es válida`
        
    }

}

alert(calcArea(pol));
