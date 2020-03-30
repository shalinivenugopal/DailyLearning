/*  
let func=function() {     //annonymous function
	console.log("Hello");
}
func();
*/

//normal function
// let sayHello =function() {
// 	console.log("Hello");
// }

// //fat arrow function => less code,fast access when compaerd to another function syntax
// let  fatSayHello = () => {
// 	console.log("Hiiiiii");
// }
	//OR

//1 line code na ipdiyae use pannikalam
//let  fatSayHello = () => console.log("Hiiiiii");



//fat arrow function
const marks = [34,45,67,12,54,60];

const grade = marks.map(e => e>= 45 ? "pass" : "fail")
const pass = marks.filter(e => e >= 45)
console.log(grade);
console.log(marks);
console.log(pass);    //here filter is used to filter only the pass marks



