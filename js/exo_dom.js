"use strict";

/**
 * header avc 1 h1 centré
 *
 * main avc 2 sections
 * 1 titre pr chaque section
 * dns chaque section 3 paragraph
 * au moin 1 img dns la section
 *
 * footer : mention legale et confidentialité 2 liens <a> centré
 * changer d'img en JS
 */

let goku = document.querySelector(".imgGoku");
let vegeta = document.querySelector(".imgVegeta");
let imgGoku = document.querySelector(".imgGoku img");
let imgVegeta = document.querySelector(".imgVegeta img");
console.log(imgGoku);
console.log(imgVegeta);

// goku.addEventListener("click", function (goku) {
//   imgGoku.src = "img/goku.jpg";
//   goku.target.toggle(".imgGoku img");
// });

vegeta.addEventListener("click", () => {
  imgVegeta.src = "img/vegeta.jpg";
});

// let tabImg = [".imgGoku", ".imgVegeta"];
// console.log(tabImg);

// let gokuId = document.querySelector("#goku");
// console.log(gokuId);

// gokuId.addEventListener("click", () => {
//   gokuId.classList.toggle("imgGoku3");
// });
