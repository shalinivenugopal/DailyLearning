games = ['Cricket','Football','Gym','Atheletics','Swimming','Long Jump'];
//games.pop();
games.push("Tennis");
games.splice(2,2);     //2nd index la irundhu 2 items delete pannum 
games.join(' ')       //games ndra array kula iruka elements ku nadduvula space varum ex:CricketFootball idhuvae ' ' ipdi kudutha Cricket Football ipdi varum
games.indexOf("Swimming"); //find index value
games.fill("Hello");  //replace all the array elements into Hello

console.log(games);