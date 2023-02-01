

//Soy un comentario de una línea

/* 

    Soy un comentario
    multinlinea
    para las personas
    con TOC.



*/


//Declaración de una variable.
// let numeroUno = 55;

// const dia = 'Lunes';

// let variable1 = '';
// let variable2;
// let variable3 = null;

// console.log(variable1);
// console.log(variable2);
// console.log(variable3);

// //El método typeof nos indica que TIPO de datos contiene una variable

// console.log(typeof(variable1));
// console.log(typeof(variable2));
// console.log(typeof(variable3));

// let variable4 = true;
// let variable5 = false;

// console.log(variable4,variable5);

// variable4 = false;
// variable5 = true;

// console.log(variable4,variable5);

// variable4 = "Submarino verde";

// console.log(variable4,variable5);



//Negacion unaria

// let numeroUno = 7;

// console.log(-numeroUno);

// console.log(numeroUno);

// let numeroFeo = "12";

// let numeroBonito = "200";

// console.log(numeroFeo + ' ' + numeroBonito);
// console.log(numeroBonito - numeroFeo);
// console.log(parseInt(numeroFeo) + parseInt(numeroBonito));

// let numeroPedido = parseInt(prompt("Dame un número"));



// if(isNaN(numeroPedido)){
//     console.log("Eh, no me has dado un número");
// }else{

//     console.log(numeroPedido);
// }


//Ejemplo de IF con ELSE IF

let nombre = prompt("Dame tu nombre");

if (nombre === '') {

    console.log("No me has dicho nada");

} else if (nombre === 'Roberto') {

    console.log("Odio ese nombre");

}
else {

    console.log("Me has dicho tu nombre, y ese es ", nombre);
}

//EJEMPLO DE SWITCH

// let dia = prompt("Dime un dia de la semana").toLowerCase();

// switch (dia) {

//     case 'lunes' :
//     case 'martes':
//     case 'miercoles':
//     case 'miércoles':
//     case 'jueves':
//     case 'viernes':

//         console.log("Es dia laborable");

//     break;

//     case 'sabado':
//         console.log("Es fin de semana");
//     break;

//     case 'domingo':

//         console.log("No esperes a las 23:59 para comitear");

//     break;

//     default:
//         console.log("Whattttttt?");

// };

let numero = 10;


numero = numero + 5;
//Escrito de esta forma estamos asignando el valor de la derecha sumado al valor original de la variable
numero += 5;


let numero2 = "10";

if(numero === numero2){
    console.log("en este caso no entraría");
}
