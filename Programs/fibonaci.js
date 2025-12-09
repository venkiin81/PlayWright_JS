// Fibonaci series 

let first = 1
let second = 1
let last = 10
let ser;
console.log("fibonaci serier")
console.log(first)
console.log(second)
for(let i=3;i<=last;i++){
    ser = first + second
    console.log(ser)
    first = second
    second = ser
}