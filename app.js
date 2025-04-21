document.write("<h1> Hola </h1>");

/* Comentario: 
Trabajar con la consola
*/

console.log("Datos de JavaScript")

// Tipos de Datos
let saludo = "Hola Mundo"

console.log(saludo)

// Array
let nombres = ['ana', 'jose', 'carlos']
console.log(nombres)

let datos = {nombre: 'juan', edad: 13, notas: [5.3, 6, 4.5]}
console.log(datos)

let num1 = 100
let num2 = 30

let result = num1 + num2
console.log("La suma es: ", result)

let nombre = 'Carlos';
let apellido = 'León';

let nombreCompleto = nombre+" "+ apellido
document.write("</br>" + "Nombre: " + nombreCompleto)

// Operadores relacionales
/*
!= Distinto
== Comparación
=== Comparación más tipo
*/

let one = 1
let one_again = 1
let one_string = "1"

console.log(one == one_again)
console.log(one == one_string)
console.log(one === one_string)

/* Estructura de constrol IF
Muestre si son iguales o distintos */
let uno = 1
let dos = '1'

if (uno == dos){
    console.log("Son Iguales")
} else {
    console.log("Son distintos")
}

// Switch

let tipoAlumno = "Neptha"

switch(tipoAlumno){
    case 'diurno':
        console.log('es alumno diurno')
        break;
    case 'vespertino':
        console.log('es alumno de la noche')
        break;
    default:
        console.log('no es alumno')
}

// Ciclos
// Muestre los 10 primeros numeros positivos
// While

let numero = 0
while(numero < 10){
    console.log(numero)
    numero++;
}

// For

let nom = ['ana', 'jose', 'carlos']
console.log(nom[0])
console.log(nom.length)

for(let i = 0; i < nom.length; i++){
    console.log(nom[i])
}

for(let x in nom){
    console.log(nom[x])
}