"use strict";

/**
 * le DOM -> Document Object Model
 * cst 1 interface de programmation qui est 1 représentation du HTML (de la page web)
 *
 * grace au DOM on peut injecter du txt, des img , ds block entier d HTML
 */

// GET = attraper qlq chose
// SET = mettre qlq chose dedans
//pr selctionner une balise
let selectBody = document.getElementsByTagName("body");
console.log(selectBody); //dns la console cst 1 HTMLCollection -> tableau
selectBody[0].style.background = "lightBlue"; //pr cibler body dns 1 tableau puis mettre un fond bleu

//pr selectionner les boutons
let selectBtn = document.getElementsByTagName("button");
console.log(selectBtn);
selectBtn[0].style.fontWeight = "700"; //le 1er btn (fontWeight -> txt en gras)
selectBtn[1].style.fontWeight = "700"; //le deuxième bouton

let tailleSelect = selectBtn.length;
console.log(tailleSelect); //2

//pr mettre ls boutons avc 1 fond orange
for (let j = 0; j < tailleSelect; j++) {
  selectBtn[j].style.background = "orange";
}

//on peut aussi ls selectionner en fonction de leur class
let selectClassBox = document.getElementsByClassName("box");
console.log(selectClassBox);
selectClassBox[0].style.borderRadius = "15px";

//selection par l'id
let selectH1Id = document.getElementById("selectH1");
console.log(selectH1Id);
selectH1Id.style.visibility = "visible";

//queryselector(qund on veut selctionner un seul element)
let gameNoticeTitre = document.querySelector("#gameNoticeTitre");
// console.log(gameNoticeTitre.textContent); //textContent pr recupérer le txt que contient la balise

//pr que le txt sois tt en  majuscule
gameNoticeTitre.style.textTransfrom = "uppercase";
//OU
// console.log(gameNoticeTitre.textContent.toUpperCase());

//queryselectorall -> qund plsrs éléments peuvent être selectionnés
let firstCaracPara = document.querySelectorAll(".firstCaracPara");
console.log(firstCaracPara);

for (let i = 0; i < firstCaracPara.length; i++) {
  firstCaracPara[i].style.color = "#3333";
  firstCaracPara[i].style.fontSize = "2rem";
}
