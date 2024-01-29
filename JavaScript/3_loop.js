const prompt = require("prompt-sync")(); 

//program to add two numbers

let sum=0;
let n=prompt("Enter the value of n:");
n=Number.parseInt(n);

for(let i=0;i<n;i++){
  sum+=(i+1);
}
console.log(" sum of first " + n + " natural number is " + sum);



//exmaple
// let fact = 1;
// let x = prompt("Enter the value of x:");
// let num = parseInt(x);

// for (let i = 1; i <= num; i++) {
//   fact = fact * i;
// }

// console.log("Factorial of " + num + " is " + fact);
