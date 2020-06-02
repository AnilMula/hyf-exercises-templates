const body = document.querySelector("body");
const button = document.querySelector("#red-color");

button.innerHTML = "click me to turn red";

function mouseClick(event) {
  console.log(event);
  button.style.backgroundColor = "red";
}
button.addEventListener("click", mouseClick);

function keyDown(event) {
  console.log(event);
  body.style.backgroundColor = "blue";
}
button.addEventListener("keydown", keyDown);
