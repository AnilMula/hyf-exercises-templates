const variousDogs = document.getElementById("dog-image");
const dogImage = () => {
  variousDogs.innerHTML = ``;
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((dogs) => {
      const img = document.createElement("img");
      img.setAttribute("src", dogs.message);
      img.setAttribute("width", "250px");
      img.setAttribute("height", "250px");
      variousDogs.appendChild(img);
    });
};
setInterval(dogImage, 2000);

const variousBreads = document.getElementById("dog-breed");
fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((breeds) => {
    // get all breads names in to array
    const allBreads = Object.keys(breeds.message);

    //get a random number from 0 to lengthOf allBreads array
    const randomNumber = Math.floor(
      Math.random() * Math.floor(allBreads.length)
    );

    // get a random breed from the allBreads array
    const randomBread = allBreads[randomNumber];

    fetch(`https://dog.ceo/api/breed/${randomBread}/images/random`)
      .then((response) => response.json())
      .then((selectedBread) => {
        const img = document.createElement("img");
        img.setAttribute("src", selectedBread.message);
        img.setAttribute("width", "250px");
        img.setAttribute("height", "250px");
        variousBreads.appendChild(img);

        //display bread name under the image
        const breadNameUnderImage = document.createElement("h3");
        breadNameUnderImage.innerHTML = randomBread;
        variousBreads.appendChild(breadNameUnderImage);
      });
  });
