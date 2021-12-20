"use strict";

/** ------------------------ CALCULATRICE-------------------------------------
 *
 *
 * faire les fonction pour l'addition soustraction division et multiplication
 * stocké l'information dans une variable
 *
 *
 *
 * */
// 1- faire une fonction pour l'addition x + y
// 2- si on rajoute un chiffre on continue le calcul
// 3- faire une variable de stockage
// 4- optimiser la fonction addition juste x
// 5-faire les autre fonctions attention a la division par 0
// 6- on test la calculatrice dans le console.log

//la variable pour garder le resultat

// let x = 3;
// let y = 5;
// let addition = x + y;
// console.log(addition);

// function operation(x, y) {
//     // let x = 3;
//     // let y = 6;
//     let addition = x + y;
//     console.log(addition);

// }
// operation(8 , 2);
// operation(7 , 7);

// let x = 5;
// let y = 4;
// let soustraction = x - y;
// console.log(soustraction);

// function operation(x, y) {
//     // let x = 5;
//     // let y = 4;
//     let soustraction = x - y;
//     console.log(soustraction);
// }
// operation(10 , 2);
// operation(5 , 2);

// let x = 6;
// let y = 2;
// let multiplication = x * y;
// console.log(multiplication);//ok

// function operation(x, y) {
//     // let x = 6;
//     // let y = 2;
//     let multiplication = x * y;
//     console.log(multiplication);
// }
// operation(10, 2);
// operation(8, 2);

// let x = 10;
// let y = 2;
// let division = x / y;
// console.log(division);//ok

function operation(x, y) {
    // let x = 10;
    // let y = 2;
    let division = x / y;
    console.log(division);
}
operation(8, 2);
operation(100, 2);

//variable pour stocker notre resultat
let result = 0;

function additionCalc(x) {
  // result =0 -> result = result + x
  result += x;
  // ma fonction va me retourner le nouveau resultat
  return result;
}
function soustractionCalc(x) {
  // result =0 -> result = result - x
  result -= x;
  // ma fonction va me retourner le nouveau resultat
  return result;
}
function divisionCalc(x) {
  if (x === 0) {
    return result;
  } else {
    result /= x;
    return result;
  }
}
function multiplicationCalc(x) {
  result *= x;
  return result;
}

function reset() {
  result = 0;
  return result;
}
// reset();

console.log(result);
additionCalc(2);
console.log(result);
additionCalc(8);
console.log(result);
divisionCalc(2);
console.log(result);
divisionCalc(0);
console.log(result);
multiplicationCalc(2);
console.log(result);
multiplicationCalc(0);
console.log(result);
additionCalc(8);
console.log(result);
