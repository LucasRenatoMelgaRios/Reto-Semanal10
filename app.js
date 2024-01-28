//EJERCICIO 1

// let arreglo = [4, 8, 5, 3];

// let ultimoElemento = (arreglo) =>{
//     console.log(arreglo[arreglo.length - 1]);
// }   

// ultimoElemento(arreglo);


// EJERCICIO 2

// let arreglo =[2, 7, 5, 11];
// let numero = 8;

// let agregarElemento = (arreglo, numero) => {
//     arreglo.push(numero);
//     return arreglo;
// }

// arreglo = agregarElemento(arreglo, numero);

// console.log(arreglo);

//EJERCICIO 3

// let arreglo = [2, 6, 1, 8];

// let promedioDeLosNumeros = (arreglo) =>{

//     let promedioTotal = (arreglo[0] + arreglo[1] + arreglo[2] + arreglo[3]) / 4;
//     return promedioTotal
// }

// console.log(promedioDeLosNumeros(arreglo));


// EJERCICIO 4

// let arreglo = [1, 2, 5, 8, 9, 12, 2, 3];
// let suma = 0;


// let sumaDeNumerosPares = (arreglo, suma) =>{

//     for(let i = 0; i < arreglo.length; i++){
//        if(arreglo[i] % 2 === 0){
//          suma = suma + arreglo[i];
//        }
//     }
//     return suma;
// }

// console.log(sumaDeNumerosPares(arreglo, suma));


// EJERCICIO 5

// let arreglo1 = [2, 5, 2, 3, 7, 2];
// let arreglo2 = [1, 5, 3, 3];
// let arreglo3 = [];

// const arregloNuevo = (arreglo1, arreglo2, arreglo3) =>{

//     arreglo3 = [...arreglo1, ...arreglo2];

//     if(arreglo3.length >= 10){
//         return arreglo3 + true;
//     } else{
//         return arreglo3 + false;
//     }

// }

// let arregloConcatenado = [];

// arregloConcatenado = arregloNuevo(arreglo1, arreglo2);
// console.log(arregloConcatenado);


// EJERCICIO 6

// let arreglo1 = [2, 5, 2];
// let arreglo2 = [1, 5, 3];

// const funcionArray = (arreglo1, arreglo2) => {
//     let arregloNuevo = [...arreglo1, ...arreglo2]
//     for(let i = 0; i < arregloNuevo.length; i++){
//         arregloNuevo[i] *= 2;
//     }

//     return arregloNuevo;
// }

// console.log(funcionArray(arreglo1, arreglo2))


// EJERCICIO 7

// let contraseña = "password";

// let pregunta = prompt("Cual es la contraseña?")

// pregunta = pregunta.toLocaleLowerCase;

// if(pregunta === contraseña){
//     alert("Contraseña correcta")
// } else{
//     alert("contraseña incorrecta")
// }

// EJERCICIO 8

// let edad = prompt("Cual es su edad?")

// if (isNaN(edad)) {
//     alert("Edad no válida")
// } else if(edad < 4){
//     alert("Su entrada es gratis!")
// } else if(edad >= 18){
//     alert("El costo de la entrada es 10€")
// } else if(edad => 4 && edad <= 8){
//     alert("El costo de la entrada es 5€")
// } 



// EJERCICIO 9

// let edad = prompt("¿Cuál es tu edad?");
// let pago = prompt("¿Cuánto ganas mensualmente?");

// if (isNaN(edad) || isNaN(pago)) {
//     alert("Edad o pago no válido");
// } else {
//     edad = Number(edad);
//     pago = Number(pago);

//     if (edad > 18 && pago >= 1000) {
//         alert("Tienes que tributar");
//     } else {
//         alert("No tienes que tributar");
//     }
// }


// EJERCICIO 10

// let diametro = prompt("Ingrese el diamentro de la rueda");

// if(isNaN(diametro)){
//     alert("medida no válida")
// } else{

//     diametro = Number(diametro)

//     if(diametro > 1.4){
//         alert("La rueda es para un vehículo grande")
//     } else if(diametro < 0.8){
//         alert("La rueda es para un vehículo pequeño")
//     }  else if(diametro <= 1.4 && diametro >= 0,8){
//         alert("La rueda es para un vehículo mediano")
//     } 
//  }


// EJERCICIO 11

// let personas = [
//     { nombre: 'boris', hobby: 'correr', salario: 2000 },
//     { nombre: 'luis', hobby: 'cantar', salario: 1500 },
//     { nombre: 'carmen', hobby: 'cocinar', salario: 800 },
//     { nombre: 'percy', hobby: 'cantar', salario: 1100 },
//     { nombre: 'rosa', hobby: 'leer', salario: 3000 },
// ];


// const personasConMayorSalario = (personas) => {
//     for(let i = 0; i < personas.length; i++){
//         if(personas[i].salario > 1200){
//             console.log(personas[i]) 
//         }
//     }
// }


// const personaConHobbyCantar = (personas) =>{
//     for(let i = 0; i < personas.length; i++){
//         if(personas[i].hobby == "cantar"){
//             console.log(personas[i]);
//         }
//     }
// }


// const leGustaLeer = (personas) =>{
//     for(let i = 0; i < personas.length; i++){
//         if(personas[i].hobby == "leer"){
//             return true;
//         }
//     }
// }

// console.log(personasConMayorSalario(personas))
// console.log(personaConHobbyCantar(personas))
// console.log(leGustaLeer(personas))


// EJERCICIO 12

// let empleados = [
//     {nombre : "Maria", turno: "Lunes"},
//     {nombre : "Luis", turno: "Martes"},
//     {nombre : "Antonia", turno: "Miercoles"},
//     {nombre : "Pedro", turno: "Jueves"},
//     {nombre : "Marisa", turno: "Viernes"}
// ]

// let dia = prompt("Ingresa el día para saber quién trabaja ese día");
// dia = dia.toLowerCase(); // Corregir la llamada al método toLowerCase

// const turno = (empleados, dia) => {
//     for (let i = 0; i < empleados.length; i++) {
//         if (dia === empleados[i].turno.toLowerCase()) { 
//             alert(`Los días ${dia} trabaja ${empleados[i].nombre}`);
//             return; 
//         }
//     }
//     alert(`No hay empleados que trabajen el día ${dia}`);
// }


// EJERCICIO 13

// let productos = [
//     {nombre: "monitor", precio: 200 },
//     {nombre: "teclado", precio: 20 },
//     {nombre: "raton", precio: 10 }
// ]

// let pregunta = prompt("De que producto deseas consultar el precio?")


// const precioDelProducto = (productos, pregunta) => {
//     for (let i = 0; i < productos.length; i++) {
//         if (pregunta === productos[i].nombre) {
//             alert(`El precio del ${productos[i].nombre} es ${productos[i].precio}`);
//             return;
//         }
//     }
//     alert(`No se encontró el producto "${pregunta}"`);
// }

// precioDelProducto(productos, pregunta);


