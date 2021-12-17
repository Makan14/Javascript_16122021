"use strict";

//affectation after addition
let a = 10;
let b = 5;
let addition = b + a;//15
console.log(addition);

a = a + b; // a -> 15  a prend la valeur a + b

a += b; // 15 + 5 -> 20 dnc a = 20
console.log(a);//20

//affectation after soustraction
//a = 20
//b = 5
a -= b;//15
console.log("a est égal à : " + a);

//affectation after multiplication
let multiplication = a * b;//15 * 5 -> 75
console.log(multiplication);

a *= b;
console.log(a);//75

//affectation after division
let division = a / b;
console.log(division);//15
a /= b;
console.log(a);//15

//affectation after du reste -> modulo
let c = 3;
let d = 10;
let reste = d % c;//10 % 3 ->
console.log(reste);//1
//si il reste qlq chose alors 1 va s afficher sinon 0 va s afficher
/**
 * 1 = true
 * 0 = false
 */

//affectation after puissance 
let puissance = d** c;//10 puissance 3
console.log("le resultat est : " + puissance);

//incrémentation (additionner)
let total = 10;
total++;//11
console.log(total);

//decrémentation (soustraire)
total--;//10
console.log(total);