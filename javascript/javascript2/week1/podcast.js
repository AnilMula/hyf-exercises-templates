const podcasts = [
  {
    name: "The mystery om of Johan Klausen Varbourg",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Tips about dogs with small legs",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "You, me, we and us",
    imageUrl: "https://picsum.photos/536/354",
  },
  {
    name: "Breakfast news - Dinner edition",
  },
];

const rootElement = document.querySelector("body");
const unorderedList = document.createElement("ul");
rootElement.appendChild(unorderedList);

for (let i = 0; i < podcasts.length; i++) {
  let listItem = document.createElement("li");
  if (podcasts[i].name != null && podcasts[i].imageUrl != null) {
    let header1 = document.createElement("h1");
    header1.innerHTML = podcasts[i].name;
    unorderedList.appendChild(header1);

    let image = document.createElement("img");
    image.setAttribute("src", podcasts[i].imageUrl);
    image.setAttribute("alt", "image");
    unorderedList.appendChild(image);
  } else if (podcasts[i].name != null && podcasts[i].imageUrl == null) {
    let header1 = document.createElement("h1");
    header1.innerHTML = podcasts[i].name;
    unorderedList.appendChild(header1);
  }
  unorderedList.appendChild(listItem);
}
