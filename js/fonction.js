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

//fonctions qui peuvent se jouer tte seul
//1 fonction anonyme
(function (){
    console.log("je me joue tte seul");
    
})();

//fonction anonyme fléché
(() => {
    console.log("je me joue aussi tte seul");
}
)();

// ls variables et ls portées
function add2() {
    let g = 4;
    let a = 2;
    return g + 2;
}
//a n existe pas à l exterieur de ma fonction
console.log(a);
