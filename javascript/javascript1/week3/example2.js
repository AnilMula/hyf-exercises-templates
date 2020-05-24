let student = [
  { name: "Anil", age: 33, country: "India" },
  { name: "MAnil", age: 34, country: "India1" },
  { name: "NAnil", age: 35, country: "India2" },
  { name: "OAnil", age: 36, country: "India3" },
];
let keys = ["name", "age", "country"];
for (let i = 0; i < student.length; i++) {
  for (let j = 0; j < keys.length; j++) {
    console.log(student[i][keys[j]]);
  }
}
