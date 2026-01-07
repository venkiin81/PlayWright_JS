let arr = [1,2,5,6,7]

//print all value 
// for (let i=0;i<arr.length;i++){
//     console.log(arr[i])

// }

//add at the last
// arr.push(20)
// console.log(arr)

// //remove from last 
// arr.pop()
// console.log(arr)

// //add number at first 
// arr.unshift(55)
// console.log(arr)

// //is presnt or not 
// console.log(arr.includes(2))
// //index of an element 
// console.log(arr.indexOf(2))


//reduce 
let sum = arr.reduce((total,arr)=> total+arr,0)
console.log(sum)

let diff = arr.reduce((total,arr)=> arr-total,0)
console.log(diff)

//filter 
let filli = arr.filter((arr)=> arr%3==0);
console.log(filli)