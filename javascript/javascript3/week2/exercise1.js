// promise
const promise = fetch("https://yesno.wtf/api");
/* promise way
    const data = response.json().then((yesno) => {
      console.log(yesno.answer); 
          const h1 = document.getElementsByTagName("h1");
    h1[0].innerText = yesno.answer;
    });*/

//using promise by async wait

async function asyncAwaitExample() {
  try {
    const response = await promise;

    const data = await response.json();

    const h1 = document.getElementsByTagName("h1");
    h1[0].innerText = data.answer;

    console.log(data.answer);
  } catch (data) {
    console.log("error");
  }
}
asyncAwaitExample();
