"use strict";

// 1 variable cst 1 espace dns lequel on stock ds choses cst 1 boite
var unTxt = "voici un txt"; //ce qui est à droite donne sa valeur de ce qui est à gauche par rapport au égal

console.log(unTxt);
unTxt = "nouveau texte"; //on peut chnger la valeur d1 variable
console.log(unTxt);

const TVA = 20/100; //ou 0.2%
console.log(TVA);
const tva2 = 5.5/100;
console.log(tva2);
//TVA = 25 / 100; => msg d erreur dns la cnsole et stop le code

let unChiffre = 24;//on peut chnger la valeur du let
console.log(unChiffre);
unChiffre = 12;
console.log(unChiffre);

let maChaineDeCaracteres = "j'ai payé 25euros pr rien";//on peut utiliser ls simples ou double quote
// let echapement = 'je suis l\'autre chaine de caractère';  ici on echape le caractère.

// ----------------------LA CONCATENATION-----------------
let number1 = 10;
number1 = 15;

let phraseNumber = "le chiffre est : " + number1 + " degrés";
console.log(phraseNumber);

let phrase3 = ` le chiffre est : ${number1} `; //backtick permet d eviter la concatenation
