"use strict";

//je crée 1 tbl de couleurs
let tabColor = ["rouge", "bleu", "vert"];
console.log(tabColor[0]);

//pr connaitre la taille d1 tbl (length=longueur)
console.log(tabColor.length);//3 entrées

//pr entrer 1 nvlle valeur dns 1 tbl 
tabColor.push("violet");//push pr pousser
console.log(tabColor);

//pr supp le dernier élément du tbl 
tabColor.pop();// on ne met rien entre ls parenthèses
console.log(tabColor);

//pr supp le 1er élément du tbl 
tabColor.shift();// on ne met rien entre ls parenthèses
console.log(tabColor);

//pr add au debut du tableau
tabColor.unshift("orange");
console.log(tabColor);

//pr trouver l index d1 élément dns le tbl 
tabColor.indexOf("bleu");
console.log(tabColor.indexOf("bleu"));

//supp 1 element à sn index
tabColor.splice(2);
console.log(tabColor);

//Les tableaux
let array = ["je", "suis", "mairot", 50, true, ["velo", 15]];
console.log(array);
//dns 1 tableau on start tjrs part zero (index zero la 1er valeur du tableau)
console.log(array[3]);// 1 pr cibler "suis"
console.log(array[5][0]);
console.log(array[3] + array[5][0]);