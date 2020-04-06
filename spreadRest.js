//ARRAY

//   ingayum andha ... adhan rest operator , then (munnadi ... use panna SPREAD)   (pinnadi ... use panna adhu REST)
// REST => oru array la irundhu thaniya separate pannum.

// let actors = ['Vijay','SivaKarthikeyan','Atharva'];

// let updatedActor = [...actors, 'Dhanush','Suriya'];     // ... => this indicates spread operator
// console.log(actors);
// console.log(updatedActor);


// let restArr = ['Dhanush', ...actors];
// let [dhanush,vijay,...rest] = restArr;
// console.log(restArr);
// console.log(rest);



 
//OBJECT

let shalini = {
	name :  'Shalini Venugopal',
	age : 20
}

shalini = {
	...shalini,   // SPREAD 
	work : 'Software Developer'
}

let { age,...rest }  = shalini;        //{ age } => defines REST operator in object
console.log(rest);


