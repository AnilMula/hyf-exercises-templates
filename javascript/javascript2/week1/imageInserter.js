function addImageToParentTag(imageURL, parentTag) {
  const image = document.createElement("img");
  image.setAttribute("src", imageURL);
  parentTag.appendChild(image);
}
addImageToParentTag(
  "https://picsum.photos/536/354",
  document.querySelector("body")
);
