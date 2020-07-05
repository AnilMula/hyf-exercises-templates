/* 1. Create a promise that resolves after 4 seconds. 
Use this promise to log out the text 'hello' after 4 seconds.
2.Now make the promise fail by rejecting it with an error message instead of resolving it,
 and log the error message to the console. */

// creating a promise for resolve
const promise = new Promise((resolve, reject) => {
  // resolve promise after 4 seconds
  setTimeout(() => {
    resolve("hello: promise resolved after 4 seconds");
  }, 10000);
});

// using the promise
//promise.then((data) => console.log(data));'

//using aync
async function promiseUsingAsync() {
  try {
    const data = await promise;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
promiseUsingAsync();

//creating a promise for reject
const promise1 = new Promise((resolve, reject) => {
  // reject promise after 5 seconds
  setTimeout(() => {
    reject("promise rejected after 5 seconds");
  }, 5000);
});

// using the promise
//promise1.catch((data) => console.log(data));

//using aync
async function promiseUsingAsyncReject() {
  try {
    const data = await promise1;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
promiseUsingAsyncReject();
