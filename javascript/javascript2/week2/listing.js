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
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
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

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }
  return listings;
}

const listings = generateListings(20);

const filter = {
  type: "Farm",
};

//function filterListngs defined as arrow function
const filterListings = (listings, filter) =>
  listings.filter((listing) => listing.type === filter.type);

const farmListings = filterListings(listings, filter);

console.log(farmListings);

const filter2 = {
  type: "Farm",
  minPrize: 1000,
};

/* filterListings2 which filters based on
type = Farm and
minimum prize
 */
const filterListings2 = (listings, filter2) =>
  listings.filter(
    (listing) =>
      listing.type === filter2.type && listing.price <= filter2.minPrize
  );

const cheapFarmListings = filterListings2(listings, filter2);

console.log(cheapFarmListings);

//function renderListings is to display contents on the html page
const renderListings = () => {
  const output = document.getElementById("output");
  // this will clear previously writtn output on screen
  output.innerHTML = "";

  const listings = generateListings(2);
  console.log(listings);
  listings.forEach((listing) => {
    const ul = document.createElement("ul");
    ul.innerHTML = listing.type;
    output.appendChild(ul);

    const li1 = document.createElement("li");
    li1.innerHTML = listing.price;
    ul.appendChild(li1);

    const li2 = document.createElement("li");
    li2.innerHTML = listing.facilities;
    ul.appendChild(li2);

    const li3 = document.createElement("li");
    li3.innerHTML = listing.hasGarden;
    ul.appendChild(li3);

    const li4 = document.createElement("li");
    li4.innerHTML = listing.size;
    ul.appendChild(li4);

    const li5 = document.createElement("li");
    li5.innerHTML = listing.img;
    ul.appendChild(li5);
  });
};

document.querySelector("button").addEventListener("click", renderListings);
