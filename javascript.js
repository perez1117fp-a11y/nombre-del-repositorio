*
var nombreVariable = "!Hola, Mundo!";
let nombreNuevoVariable = "Hola, soy un let.";
const nombreConstante = "Hola, soy una constante.";

console.log(nombreVariable);

let nombre = "Juan";
let edad = 21; 
let id = false;

// Estructuras de Control de flujo

// Condicionales
// Estructura if
if (edad < 18){
    console.log(nombre + ", no eres mayor de edad.")
} else if (edad >= 21 && id == true ) {
    console.log(nombre + ", si eres mayor de edad y puedes tomar alcohol.")
} else {
    console.log(nombre + ", si eres mayor de edad, pero no tienes id.")
}

// Estructura Switch
/* let op = prompt("Ingresa una opcion: ");
switch(parseInt(op)) {
    case '1', 1 :
        console.log("Iniciar Juego");
        break;
    case '2', 2:
        console.log("Pausar Juego");
        break;
    case '3', 3:
        console.log("Salir del Juego");
        break;
    default:
        console.log("Opcion no valida"); 
} */
/*
// Bucles, Loops, Iteraciones, etc.
// Estructura for (Sabemos el numero de repeticiones)
for(let i = 0; i <= 10; i++){
    console.log("for: ", i);
}

// Estructura while (No sabemos cuntas veces se va a repetir)
let c = 0;
while (c <= 10){
    console.log("while: ", c);
    c++;
}
// Ejemplo con true
let edadMayoriaDeEdad = 1;
while (true) {
    if (edadMayoriaDeEdad < 18) {
        console.log("No eres mayor de edad.");
        edadMayoriaDeEdad++;
    } else {
        console.log(`Tienes ${edadMayoriaDeEdad}, ya eres mayor de edad.`);
        break;
    }
}

// Estructura do-while (Funciona igual que while, pero garantiza porlo menos una ejecucion del bucle)
do {
    console.log("Se ejecuto 1 vez.")
} while (false);
*/

// Programacion Funcional
function saludar(nombre) {
    console.log(`Hola, ¿Como estas ${nombre}?`);
}
function sumaDosNumeros(a, b) {
    return a + b;
}
// main
saludar("Juan");
console.log(sumaDosNumeros(2, 5));

// Estructuras de Datos
// listas
let numeros = [10, 20, 30 ,40 ,50];
// indices  = [0 ,  1,  2,  3,  4]
const colores = ["Azul", "Rojo", "Verde"];

//Acceder o ver dato de lista
console.log(numeros[2]);
console.log(colores);

// Metodos de Objeto (lista)
// push(valor) Insertar un valor nuevo al final
numeros.push(60);
console.log(numeros);
// pop() Eliminar el valor en la ultima posicion
numeros.pop();
console.log(numeros);
// unshift(valor) Agregar un dato al inicio
numeros.unshift(0);
console.log(numeros);
// shift() Elimina el dato de el inicio
numeros.shift();
console.log(numeros);
// Metodos map(), filter(), reduce()
 

// Diccionarios (clave - valor)
let datosPersonales = {
    "nombre": "Jose",
    "edad": 28
}
// Acceder a los datos del Diccionario
console.log(`Nombre: ${datosPersonales.nombre}, Edad: ${datosPersonales.edad} años.`);
// Metodos de Diccionario+
// Agregar nueva clave-valor
datosPersonales["pais"] = "Mexico";
console.log(datosPersonales);
// Eliminar dato de Diccionario
delete datosPersonales.edad;
console.log(datosPersonales);


