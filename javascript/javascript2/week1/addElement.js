// this javascript is to add a div to html document

const div = document.createElement("div");

div.innerHTML = "this div is created using javascript";

const body = document.querySelector("body");

body.appendChild(div);

// adding style to the newly created element

div.style.color = "red";
