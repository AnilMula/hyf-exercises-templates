const jsonString = '{"name":"anil","age":33,"hobbies":["cooking","farming"]}';

const jsString = JSON.parse(jsonString);

console.log(jsString);

jsString.married = "yes";

console.log(jsString);

const newJsonString = JSON.stringify(jsString);

console.log(newJsonString);
