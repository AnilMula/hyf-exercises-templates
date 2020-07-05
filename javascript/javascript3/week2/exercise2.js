fetch("https://yesno.wtf/api")
  .then((response) => response.json())
  .then((data) => {
    const h1 = document.getElementsByTagName("h1");
    h1[0].innerText = data.answer;
  });

fetch("https://knajskdskj.jasdk").catch((error) => console.log(error));

//.......async way
const promise = fetch("https://yesno.wtf/api");
const promise1 = fetch("https://knajskdskj.jasdk");

async function yesNoLog() {
  try {
    const yesno = await promise;
    const yesnodata = await yesno.json();
    console.log(yesnodata.answer);
  } catch (error) {
    console.log(error);
  }
}
yesNoLog();

async function errorLog() {
  try {
    const error = await promise;
    const errorData = await error.json();
    console.log(errorData);
  } catch (error) {
    console.log(error);
  }
}
errorLog();
