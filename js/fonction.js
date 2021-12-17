"user strict";
//on declare 1 fonction le mot function
function avanceVersLeNord() {
    //ici on met le code
    console.log("je pars vers le nord");
    console.log("je fais 10 km");
}
//on fait appl à la fonction
avanceVersLeNord();
avanceVersLeNord();
avanceVersLeNord();

//function nom(argument)
//on peut mettre plsrs arguments dns nos fonctions
function avanceVersOuest(arg, gourde) {
    console.log("je pars vers l'ouest");
    console.log("je fais " + arg + " km");
    console.log("je bois dns une gourde " + gourde);
}
avanceVersOuest(25, "du café");

let contenu = "du coca";
avanceVersOuest(25, contenu);
