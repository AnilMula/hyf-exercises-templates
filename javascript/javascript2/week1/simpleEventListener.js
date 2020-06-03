const body = document.querySelector("body");

const button = document.createElement("button");

button.innerHTML = "click me!!!";

body.appendChild(button);

button.addEventListener("click", function () {
  button.innerHTML = "button clicked";
  button.style.color = "red";
  button.style.background = "white";
});
