const body = document.querySelector("body");
body.innerHTML =
  "this is a demo to : toggle the background color of the body and the text color in the page. If the background is white and the text is black, then clicking the button will make the background dark and the text white and vice versa";
const button = document.createElement("button");
button.innerHTML = "click to switch colors!!!";

body.appendChild(button);

body.style.backgroundColor = "white";
body.style.color = "black";

// add event listener

button.addEventListener("click", function () {
  let backgroundcolor = body.style.backgroundColor;
  body.style.backgroundColor = body.style.color;
  body.style.color = backgroundcolor;
});
