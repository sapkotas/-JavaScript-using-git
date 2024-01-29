const prompt = require("prompt-sync")(); 

let a=prompt("Enter the value of n:");
n=Number.parseInt(a);

let i=0;
while(i<n){
  console.log(i);
  i++;
}

//do while loop
let j=10;
do{
  console.log(j);
  j++;
}while(i<n)