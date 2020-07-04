// promise

const promise = fetch("https://yesno.wtf/api");
//using promise by async wait
async function asyncAwaitExample() {
  try {
    const data = await promise;
    console.log(data);
    console.log("yes");
  } catch (data) {
    console.log("NO");
  }
}
asyncAwaitExample();
