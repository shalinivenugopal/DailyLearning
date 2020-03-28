//1).alert("Hello Kamini");

//funtions
function getResult(marks){
	let result;
	if(marks>=45){
		result = "pass";
	}else {
		result = "fail";
	}
	return result;   
}
let result = getResult(90);
console.log(result);

