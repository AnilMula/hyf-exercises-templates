const users = ["bena", "marie", "anil"];
function getLoggedInUsers() {
  return new Promise((resolve, reject) => {
    // 1. figure out how to make a random boolean - check
    const rand = Boolean(Math.round(Math.random()));
    console.log(rand);
    // 2. make an if sentence based on the boolean - check
    if (rand === true) {
      resolve(users);
    } else if (rand === false) {
      reject("unlucky, rejected");
    }
  });
}
const promise = getLoggedInUsers()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log(typeof promise);
console.log(promise);
