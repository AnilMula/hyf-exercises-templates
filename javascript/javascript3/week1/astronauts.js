//const fetch = require("node-fetch"); //npm install node-fetch --save

const body = document.querySelector("body");

fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((astronauts) => {
    const h1 = document.createElement("h1");
    h1.innerHTML = `There are ${astronauts.people.length} astronauts in space, they are:`;
    body.appendChild(h1);

    const ul = document.createElement("ul");
    body.appendChild(ul);
    astronauts.people.forEach((astronaut) => {
      const li = document.createElement("li");
      li.innerHTML = astronaut.name;
      ul.appendChild(li);
    });
  });
