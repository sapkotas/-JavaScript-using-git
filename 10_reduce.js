let arr2 = [45, 21, 6,7,9,10]
let a2 = arr.filter((a)=>{
    return a<10

})
console.log(a2)

//Array reduce method
let array3 = [1,2,3,8,5,1,7]
let newArray3= array3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log (newArray3)
