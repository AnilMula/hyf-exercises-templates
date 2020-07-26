//student name and emailid mobile course{course,grade}
class Course {
  constructor(course, grade) {
    this.course = course;
    this.grade = grade;
  }
}
class Student {
  constructor(name, mobile, email, courses) {
    this.name = name;
    this.mobile = mobile;
    this.email = email;
    this.courses = courses;
  }
  getHigestGrade() {
    let higestGrade = 0;
    this.courses.forEach((element) => {
      if (higestGrade < element.grade) {
        higestGrade = element.grade;
      }
    });
    return higestGrade;
    //end
  }
}
const student1 = new Student("anil", 1234, "a@gmail.com", [
  new Course("HTML", 3),
  new Course("CSS", 4),
  new Course("JAVA Script", 5),
]);
//console.log(student1.courses);
console.log(student1.getHigestGrade());
