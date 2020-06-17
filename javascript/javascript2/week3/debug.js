const anonymousFunction = (number) => {
  console.log(`anonymous: ${number * number}`);
};
const anonymousFunction2 = function (number) {
  //console.log(`anonymous${number * number}`);
  return `anonymous${number * number}`;
};
console.log(anonymousFunction2(5));
