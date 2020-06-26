fetch("https://yesno.wtf/api/")
  .then((response) => response.json())
  .then((yesnodata) => {
    console.log(yesnodata);
  });
