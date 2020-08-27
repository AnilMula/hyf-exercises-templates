/* const person = {
  name: "anil",
  age: 30,
};

module.exports = person; */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    console.log(`My name is ${this.name} and age ${this.age}`);
  }
}

module.exports = Person;
