let shalu = {
		name:"Shalini Venugopal",
		age:20,
		startExam:function() {
			console.log("You can start the exam");
		}
};

//console.log(shalu.name); or u can use like below 
console.log(shalu["name"]);
shalu.startExam();