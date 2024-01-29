let arr=[45,23,21];
//console.log(arr)
let a =arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value +1
})
console.log(a);
