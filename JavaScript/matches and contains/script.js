//This is not a good practise
//chrome supports this
// console.log(id1)

//This is  good
let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)

//matches property.
//this return false beacuse there is no class named big
console.log(id1.matches(".big")) 
//this is correct.
console.log(id1.matches(".box"))

//closest: To look for the nearest ancestor that matches the given css selector.
console.log(sp1.closest("#sp1"))

//conatins: returns true of elementB is inside elementA or when elementA == elementB
console.log(id1.contains(sp1))
console.log(sp1.contains(id1))
