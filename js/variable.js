"use strict"; //le use strict permet de lever certaines erreurs qui normalment ne sont pas prise en compte

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

//---------------- LES TYPES DE VARIABLES-----------

//les chaines de caracteres
let string = "je suis une chaine de caractere" //string = chaine de caracteres
let number = 24;
let number24 = "24";
console.log(number + parseInt(number24));
let boolean = true;//un boolean est true ou false (vrai ou faux)

//Les tableaux
let array = ["je", "suis", "mairot", 50, true, ["velo", 15]];
console.log(array);
//dns 1 tableau on start tjrs part zero (index zero la 1er valeur du tableau)
console.log(array[3]);// 1 pr cibler "suis"
console.log(array[5][0]);
console.log(array[3] + array[5][0]);

//les objets
let object = {prenom : "makan", age : 30, ville : "Paris"};//l objet fonctionne with des key et ds value key:value

console.log(object);