// creating a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("waited for 5 seconds");
  }, 5000);
});

//using promise
promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => console.log(data));
