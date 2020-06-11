/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
const body = document.querySelector("body");

function generateListings() {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];
  const ol = document.createElement("ol");
  for (let i = 0; i < 4; i++) {
    // create a ordered list for each listing

    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }
    const ul = document.createElement("ul");
    // create a list listem

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
    const li1 = document.createElement("li");
    li1.innerHTML = listing.type;
    ol.appendChild(li1);
    body.appendChild(ol);

    const li2 = document.createElement("li");
    li2.innerHTML = listing.facilities;
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.innerHTML = listing.price;
    ul.appendChild(li3);

    const li4 = document.createElement("li");
    li4.innerHTML = listing.hasGarden;
    ul.appendChild(li4);

    const li5 = document.createElement("li");
    li5.innerHTML = listing.size;
    ul.appendChild(li5);

    const li6 = document.createElement("li");
    li6.innerHTML = listing.img;
    ul.appendChild(li6);

    // attach unorder list to ordered list
    ol.appendChild(ul);
  }
}
const button = document.querySelector("button");
button.addEventListener("click", generateListings);
