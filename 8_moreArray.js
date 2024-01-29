
const prompt = require("prompt-sync")();
let num = [3,6,8,9,5,4,2,1,7]

//using loop to print array elements
for(let i=0; i<num.length; i++){
  console.log(num[i])
}  

//for each loop
num.forEach((element) =>{
  console.log(element * element) //here elements aren't new variables they are numbers present in the array
})

//Array.form
let name = "Sunav"
let arr = Array.from(name)
console.log(arr)

// // for...in
for (let i in num){
  console.log(num[i])
}

// for...of 
for (let item of num){
  console.log(item)
}
