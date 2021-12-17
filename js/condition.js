"use strict";

let xCondition = 2;//number
let yCondition = 3;//number
let wCondition = "2";//string
let zCondition = 3;//number

//test si xCondition est pls petit que yCondition 
if (xCondition < yCondition) {
    console.log("xCondiiton est inférieur à yCondition");
}

// test si xCondition (2) est plus grand que yCondition (3)
if (xCondition > yCondition) {
    console.log("xCondition est superieur à yCondition");
  
  } else {  
    console.log("xCondition est inferieur à yCondition");
  
  }
  
  //test si xCondition existe
  if (zCondition) {  
    console.log("ma variable zCondition existe");
  
  }
  
  //quand ma variable ne rempli pas la condition
  let aCondition = null;
  
  if (aCondition) { 
    console.log("ma variable aCondition existe");
  
  }
  
  //test si xCondition différent de 3 (!= -> différent de)
  if (xCondition != 3) {
    console.log("xCondition est différent de 3 ");
  
  }
  
  //test d'égalité
  if (xCondition == wCondition) {
    console.log("ils sont égaux mais pas en typage ");
  
  }

  //test d egalité strict
  if (yCondition === zCondition) {
    console.log("ils snt strictement égaux en valeur est en typage");
  }

  //test si l une ds deux conditions est vrai
  if (xCondition == 2 || yCondition == 2) {
    console.log("l un ds deux est vrai");
  }
  //si ls deux snt vrai
  if (xCondition === 2 && wCondition == 2) {
    console.log("ls deux snt vrai");
  }

  //on peut faire un if sur une seul ligne s il n y a qu une instruction
  if(xCondition === 2 && wCondition == 2) console.log("ls deux sn à nveau vrai");

  //une autre façon d ecrire un if -> ls ternaires 
  //si vrai ? alors instruction : sinon (else)
  // ? -> est-ce que ma condition est vrai alors j'exécute le code après le ?
  // : -> else et le code que j'execute si la condition n est pas vrai
  xCondition != yCondition 
    ? console.log("ils snt diffts")
    : console.log("ils snt identique");

  // ------------------LE SWITCH CASE -------------------
  let fruit = "pomme";
  switch (fruit) {
    case "pomme":
        console.log("cst 1 pomme !");
      break;

    case "poire":
        console.log("cst 1 poire !");
      break;
  
    default:
      console.log("ce n est ni une pomme, ni 1 poire");
  }