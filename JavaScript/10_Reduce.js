
const prompt = require('prompt-sync')();

// Array reduce method
let arr3 = [1, 27, 37, 5, 2, 10]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)

let arr4 = [1, 27, 37, 5, 2, 10]
const reduce_function = (h1, h2) => {
  return h1 - h2
}
let newarr4 = arr3.reduce(reduce_function)
console.log(newarr4)