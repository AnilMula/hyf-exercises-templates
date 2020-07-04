/* 1. Create a promise that resolves after 4 seconds. 
Use this promise to log out the text 'hello' after 4 seconds.
2.Now make the promise fail by rejecting it with an error message instead of resolving it,
 and log the error message to the console. */

// creating a promise for resolve
const promise = new Promise((resolve, reject) => {
  // resolve promise after 10 seconds
  setTimeout(() => {
    console.log("promise resolved after 10 seconds");
  }, 10000);
});

// using the promise
promise.then((data) => console.log(data));

//creating a promise for reject
const promise1 = new Promise((resolve, reject) => {
  // resolve promise after 2 seconds
  setTimeout(() => {
    console.log("promise rejected after 2 seconds");
  }, 4000);
});

// using the promise
promise1.then((data) => console.log(data));
