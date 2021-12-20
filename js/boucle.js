"use strict";

// ------------------------------ while
//je crée 1 compteur
let count = 5;
//le début du décompte
let i = 0;

while (i <= count) {
    document.write("le compte et de " + i + "/5<br>");
    i++;
}

// DO while -> elle fait au moins 1 fois 1 tour de boucle
let j = 0;

do{
    j = j + 1;
    document.write("<br> le compte et de " + j + "/5")
}while (j <= 0);
    
//---------------------------------------------
let tabPersonnage = ["mage", "voleur", "rodeur", "guerrier"];
// ns donne la taille du tableau
let tailleTabPerso = tabPersonnage.length;

for (let k = 0; k < tailleTabPerso; k++) {
    document.write("<br>Le " + tabPersonnage[k] + " attaque");
    if (k === 3) {
        document.write("<br>attaque multiple");
    }   
}

//------------------------------for in
//pr utiliser ls paramètres ds objets
let obj = {a: 1, b: 2, c: 3,};

for (let propriete in obj) { //pr donner la propriete de chaqu1 ds objets
    document.write(`<br> la key :$(propriete) -> valeur: ${obj[propriete]}`);   
}

