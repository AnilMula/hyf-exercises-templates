/* Create the classes Job and Education.

Job has five properties: id, title, description, startDate and endDate (the dates can be strings or actual Date objects).
Education has six properties: id, title, school, address, startDate and endDate.
Part 2: */
class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    const index = this.jobs.indexOf(job);
    this.jobs.splice(index, 1);
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation(education) {
    this.educations.pop();
  }
  renderCV() {
    const body = document.querySelector("body");
    const h1 = document.createElement("h1");

    h1.innerHTML = this.email;
    body.appendChild(h1);

    const headindJobs = document.createElement("h1");

    headindJobs.innerHTML = "JOBS";
    body.appendChild(headindJobs);

    const jobList = document.createElement("ol");
    body.appendChild(jobList);
    this.jobs.forEach((job) => {
      const li = document.createElement("li");
      li.innerHTML = job.title;
      jobList.appendChild(li);
    });

    const headindJEducations = document.createElement("h1");

    headindJEducations.innerHTML = "EDUCATION";
    body.appendChild(headindJEducations);

    const educationList = document.createElement("ol");
    body.appendChild(educationList);
    this.educations.forEach((education) => {
      const li = document.createElement("li");
      li.innerHTML = education.title;
      educationList.appendChild(li);
    });
  }
}
const job1 = new Job(
  1,
  "Tech assistant",
  "as a tech assistant",
  "7aug2015",
  "8sep2019"
);

const job2 = new Job(2, "Developer", "web developer", "9aug2019", "8sep2020");

const myCV = new CV("anilreddymula@gmail.com");

console.log(myCV.email);
myCV.addJob(job1);
myCV.addJob(job2);
console.log(myCV.jobs);

const education1 = new Education(
  1,
  "primary education",
  "SVRAV school",
  "India",
  "2010",
  "2011"
);

const education2 = new Education(
  1,
  "plus 2",
  "SR Academy",
  "India",
  "2012",
  "2014"
);
myCV.addEducation(education1);
myCV.addEducation(education2);
console.log(myCV.educations);

myCV.renderCV();
// myCV.removeJob(job2);
// console.log(myCV.jobs);
