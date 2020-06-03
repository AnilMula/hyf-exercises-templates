const favouriteDishes = [
  "Aebleflæsk",
  "Krebinetter",
  " Hønsekødssuppe",
  "Frikadeller",
  "Medisterpølse",
  "Flæskesteg",
  "Mørbradbøffer",
];
// first get the root element body

const body = document.querySelector("body");

// create a new element ul

const unorderedList = document.createElement("ul");

unorderedList.innerHTML = "Favourite dishes";

//append unordered list to the body
body.appendChild(unorderedList);

for (let i = 0; i < favouriteDishes.length; i++) {
  const listItem = document.createElement("li");
  listItem.innerHTML = favouriteDishes[i];
  unorderedList.appendChild(listItem);
}
