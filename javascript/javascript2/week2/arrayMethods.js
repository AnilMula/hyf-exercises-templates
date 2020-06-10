const mentors = [
  {
    name: 'Abed Sujan',
    subjects: ['JS', 'HTML', 'CSS', 'NODEJS'],
    yearOfExperience: 4,
  },
  {
    name: 'Ahmed Magdy',
    subjects: ['JS', 'Database', 'CSS'],
    yearOfExperience: 1,
  },
  {
    name: 'Alicia Gonzales',
    subjects: ['DB', 'HTML', 'NODEJS'],
    yearOfExperience: 8,
  },
  {
    name: 'allan Thraen',
    subjects: ['REACT', 'HTML', 'CSS'],
    yearOfExperience: 3,
  },
  {
    name: 'Anders Ravn',
    subjects: ['JS', 'HTML', 'NODEJS'],
    yearOfExperience: 2,
  },
  {
    name: 'Daniel Fernandes',
    subjects: ['Database', 'HTML', 'CSS'],
    yearOfExperience: 9,
  },
]

// forEach
const body = document.querySelector('body')

const whatIsForEach = mentors.forEach((mentor) => {
  const h1 = document.createElement('h1')

  h1.innerHTML = mentor.name

  body.appendChild(h1)
})

// map
const mentorNameList = mentors.map((mentor) => mentor.name)

console.log('mentorNameList', mentorNameList)
console.log('mentors', mentors)

// filter
const experiencedMentors = mentors.filter(
  (mentor) => mentor.yearOfExperience > 2
)

console.log(experiencedMentors)

// chaining array methods
mentors
  .filter((mentor) => mentor.yearOfExperience > 3)
  .map(
    (mentor) =>
      `${mentor.name} has ${mentor.yearOfExperience} years of experience.`
  )
  .forEach((sentence) => {
    const h3 = document.createElement('h3')
    h3.innerHTML = sentence
    body.appendChild(h3)
  })
