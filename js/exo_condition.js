"user strict";
/**
 * 1 dmander au user d écrire 1 couleur primaire dns 1 prompt (bleu rouge jaune)
 * 2 tester la couleur entrée en chaine de carctère 
 * 3 afficher dns la page "bravo la couleur ...est une couleur primaire"
 * 4 la couleur choisis n est pas une couleur primaire
 */

let color = "bleu";

 color = prompt("Ecrit une couleur primaire");
// switch (color) {
//     case "bleu":
//         console.log("bravo la couleur " + color + " est une couleur primaire");
//         break;
//     case "rouge":
//         console.log("bravo la couleur " + color + " est une couleur primaire");
//         break;
//     case "jaune":
//         console.log("bravo la couleur " + color + " est une couleur primaire");
//         break;

//     default:
//         console.log("la couleur choisis n est pas une couleur primaire");
// }

if (color === "bleu" || color === "rouge" || color === "jaune") {
    document.write("bravo la couleur " + color + " est une couleur primaire")
}else{
    document.write("la couleur choisis n est pas une couleur primaire");
}
