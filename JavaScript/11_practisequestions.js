const prompt = require("prompt-sync")();
//practise set for JS
// //QNO 1 Create an array of numbers and take input from the user to add numbers to this array
let array = [1, 2, 3, 4, 5, 6, 7];
let a = Number(prompt("Enter the number:"));
console.log("your number is", a);
array.push(a);
console.log(array);

// //QNO 2 Keep adding numbers to the array in QNO 1 until 0 is added to the array
let newarray = [1, 3, 5, 6, 7, 9, 10, 13, 5];
var b ;
//while (b=Number(prompt("Enter a number:"))!==0)  if there is a single round bracket then it will give boolean value
while ((b=Number(prompt("Enter a number:")))!==0) {
console.log("your number is", b);
  newarray.push(b);
  console.log(newarray);
}


//QNO 3 Filter for numbers divisible by 10 from a given array
let anotherArray = [1, 3, 5, 6, 7, 9, 10, 13, 5,100,200,90,];
let n = anotherArray.filter((x)=>{
  return x % 10 ==0;
})
console.log(n)

// //QNO 4 Create an array of square of given numbers
let Array = [1, 3, 5, 6, 7, 9, 10, 13, 5,100,200,90,];
let m = Array.map((x)=>{
  return x*x;
})
console.log(m);


//QNO 5 Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated)
let arrayOne = [1, 2, 3, 4, 5, 6, 7,8,9,10];
let fact = array.reduce((x1,x2)=>{
  return x1*x2;
});
console.log(fact);

