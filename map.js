const students = [
  {
    name: "Shalini",
    age: 20,
    country: "KPM"
  },
  {
    name: "Kamini",
    age: 15,
    country: "Trichy"
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







/*Map appudingiradhu, javascript languagela arrays ku iruka oru function, idhuvum foreach 
mathiri andha arrayla iruka elementsa one by one a loop pannum, 
and Map appudingira function edhuku maina use agumna, neenga oru arrayla iruka elements
 a vachu innoru array generate pannathan use agum*/