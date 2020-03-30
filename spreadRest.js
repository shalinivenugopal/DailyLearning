let actors = ['Vijay','SivaKarthikeyan','Atharva'];

let updatedActor = [...actors, 'Dhanush','Suriya'];     // ... => this indicates spread operator
console.log(actors);
console.log(updatedActor);


let restArr = ['Dhanush', ...actors];
let [dhanush,vijay,...rest] = restArr;
console.log(restArr);
console.log(rest);


//   ingayum andha ... adhan rest operator , then (munnadi ... use panna SPREAD)   (pinnadi ... use panna adhu REST)
// REST => oru array la irundhu thaniya separate pannum.
 
