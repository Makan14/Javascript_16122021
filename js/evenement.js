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

let reponseF = document.querySelector(".reponseF");
console.log(reponseF);

let inputId = document.querySelector("#inputId");
console.log(inputId.value);

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
  reponse.style.visibility = "hidden";
  reponse.style.display = "none";
  reponse.style.visibility = "visible";
  reponseF.style.display = "block";
  reponseF.style.visibility = "visible";
  questionContainer.style.background = "red";
});

btn2.addEventListener("click", () => {
  reponseF.style.visibility = "hidden";
  reponse.style.display = "block";
  reponseF.style.display = "none";
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
  mouseUp.style.transform = "scale(1) translate(-50%, -50%)";
});

//MOUSEENTER MOUSEOUT
questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "#3333";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "brown";
});

//MOUSEOVER
reponse.addEventListener("mouseover", () => {
  reponse.style.transform = "rotate(5deg)";
});

//pr la reponse se redimenssionne
reponse.addEventListener("mouseout", () => {
  reponse.style.transform = "rotate(0)";
});

reponseF.addEventListener("mouseover", () => {
  reponseF.style.transform = "rotate(5deg)";
});

// inputId.value = "toto";

// inputId.addEventListener("input", function () {
//   console.log(inputId.value);
//   let result = parseInt(inputId.value);
//   console.log(result + 2);
// });
