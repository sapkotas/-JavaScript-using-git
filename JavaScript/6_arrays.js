const prompt = require('prompt-sync')();


let name="sunav"
//print name from string
console.log(name[0]);
console.log(name[1]);
let friend ='prakash'
console.log(friend);

//template literals
let friend1 = "Sagar";
let friend2 = "Rohan";
let FriendWith = `${friend2} is friend of ${friend1}`;
console.log(FriendWith)

//escape sequence characters
let fruit = 'Mango\'es'
console.log(fruit)
//from double inverted comma
let FavFruit="Mango\'es"
console.log(FavFruit)

//cases in JavaScript
//to lowercase
console.log(name.toLowerCase());
//to uppercase
console.log(name.toUpperCase());
//using slice propertiy
console.log(name.slice(1,5));
//using slice but only one argument
console.log(name.slice(2));
//using replace property
console.log(name.replace("nav","sun"));
// using concation property
let text = "sun"
console.log(text.concat(" zara mere pass aa", text ," barishye barishye"))
//using trim property
let space ="            MoreSpace        "
console.log(space.trim());

