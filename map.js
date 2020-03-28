const students = [
  {
    name: "Charles",
    age: 26,
    country: "Sri Lanka"
  },
  {
    name: "Flashlight Entertaintment",
    age: 20,
    country: "India"
  }
]

// lets say you want to fetch only the names of the students,
// here you want to create an array of names using this array of student objects
// this is where you use map function (to transform an array to another)

const namesArray = students.map(student => {
  // whaterver you return here will be put inside the new array
  // in this case each student name
 return student.name; 
});

console.log(namesArray);

// like wise if you want to get all the country names
const countryArray = students.map(student => {
  // whaterver you return here will be put side the new array
  // in this case each student name
 return student.country; 
});
console.log(countryArray);
