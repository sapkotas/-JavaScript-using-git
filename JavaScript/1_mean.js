
//problem to find mean of 4 numbers
const prompt=require("prompt-sync")();
const mean = (a,b,c,d,) =>{
  return (a+b+c+d)/4;
}
let a=Number(prompt("Enter the value of a:"));
let b=Number(prompt("Enter the value of b:"));
let c=Number(prompt("Enter the value of c:"));
let d=Number(prompt("Enter the value of d:"));

console.log("Mean of 4 numbers is:",mean(a,b,c,d));


