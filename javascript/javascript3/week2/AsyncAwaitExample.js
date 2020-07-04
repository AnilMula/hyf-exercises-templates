// creating a promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("waited for 5 seconds");
  }, 5000);
});

//using promise by async wait
async function asyncAwaitExample() {
  try {
    const data = await promise1;
    console.log(data);
  } catch (data) {
    console.log(data);
  }
}
asyncAwaitExample();
