//forEach => only for arrays
actress = ['Jenilia','Sreya','Sneka','Nayanthara','Sai Pallavi'];
actress.forEach((e,i) => console.log(e,i))     //i => indicates index value



//for in 

for(let i in actress) {
	console.log(i);   //array la for in use panna index mattum print agum
}

// for in object

obj = {name: 'shalu', age: 20}
for(let x in obj) {   //inga x ndradhu key obj ndradhu value
	console.log(x);	   //idhula key mattum dhan print agum
	console.log(obj[x]);   //ipdi kudutha adhoda values print agum	
}

//for of
for(let i of actress) {
	console.log(i);
}



