class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const user1 = new User("anil", "mula");
console.log(user1); // loging the instance of user
console.log(user1.firstName); //loging the user first name

console.log(user1.getFullName());
