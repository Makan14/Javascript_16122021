"use strict";

let questionContainer = document.querySelector(".click_event");
console.log(questionContainer);

//pr cibler le bouton 1
let btn1 = document.querySelector("#btn-1");
console.log(btn1);

//pr cibler le bouton 2
let btn2 = document.querySelector("#btn-2");
console.log(btn2);

// la variable reponse
let reponse = document.querySelector(".reponse");
console.log(reponse);

//pr le mousemove
let mouseMove = document.querySelector("#mouseMove");
console.log(mouseMove);

//j ecoute l action du user la boite de ma question
questionContainer.addEventListener("click", function () {
  console.log("je click sur ma boite de ma question");
});
//OU
// questionContainer.addEventListener("click", () => {

// });

function maFonction() {
  console.log("ma fonction est click");
}
//je déclenche ma fonction qund le user click sur la boite de la question
questionContainer.addEventListener("click", maFonction);

btn1.addEventListener("click", () => {
  reponse.style.visibility = "visible";
  questionContainer.style.background = "red";
});

btn2.addEventListener("click", () => {
  reponse.style.visibility = "visible";
  questionContainer.style.background = "green";
});

//MOUSEMOVE
//event ou e
window.addEventListener("mousemove", (event) => {
  console.log(event); //on recupère l'event
  mouseMove.style.left = event.pageX + "px";
  mouseMove.style.top = event.pageY + "px";
});

//MOUSEUP MOUSEDOWN
window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseUp.style.transform = "scale(2) translate(-25%, -25%)";
});
