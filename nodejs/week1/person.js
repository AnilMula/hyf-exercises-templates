const personVar = {
  name: "anil",
  age: 30,
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greetings() {
    return `My name is ${this.name} and age ${this.age}`;
  }
}

exports.person = personVar;
exports.PersonO = Person;
