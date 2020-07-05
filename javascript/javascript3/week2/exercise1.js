// promise
const promise = fetch("https://yesno.wtf/api");
//using promise by async wait
async function asyncAwaitExample() {
  try {
    const response = await promise;
    /* promise way
    const data = response.json().then((yesno) => {
      console.log(yesno.answer); 
          const h1 = document.getElementsByTagName("h1");
    h1[0].innerText = yesno.answer;
    });*/
    const data = await response.json();

    const h1 = document.getElementsByTagName("h1");
    h1[0].innerText = data.answer;

    console.log(data.answer);
  } catch (data) {
    console.log("error");
  }
}
asyncAwaitExample();
