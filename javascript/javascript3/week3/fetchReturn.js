async function convertToCurrency() {
  const response = await fetch("https://api.exchangeratesapi.io/latest");
  const data = await response.json();
  //console.log(data.rates.DKK);
  return data.rates.DKK;
}
convertToCurrency().then((data) => console.log(data));
