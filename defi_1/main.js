"use strict";
//afficher ou masquer le txt dns un password

let checkbox = document.querySelector("#checkbox");
console.log(checkbox); //ok
let input = document.querySelector("#input");
console.log(input); //ok

checkbox.addEventListener("click", () => {
  console.log("je click"); //ok
  if (checkbox.checked == true) {
    input.setAttribute("type", "");
    console.log("cocher"); //ok
  } else {
    input.setAttribute("type", "password");
    console.log("pas cocher"); //ok
  }
});
