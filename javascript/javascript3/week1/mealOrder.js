/* Order name
Order id
Price
List of drinks
Order extras (fx cheese, lettuce etc.) */

const jsonString =
  '[{"orderName":"pizza","orderId":1,"price":100,"ListOfDrinks":["cola","pepsi"],"OrderExtras":["cheese","salat"]},{"orderName":"pasta","orderId":2,"price":109,"ListOfDrinks":["fanta","mirinda"],"OrderExtras":["tomat","pepper"]}]';
console.log(JSON.parse(jsonString));
