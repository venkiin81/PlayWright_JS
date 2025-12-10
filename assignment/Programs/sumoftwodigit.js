//sum of two digits 

let num = 30;
let sum=0;//5

while(num > 0){ //15
    if (num > 0){
        rem = num % 10 // last digit 5
        sum = sum + rem // add rem 0+5
        num = Math.floor(num / 10 ) //floor is required for round off 
}
}
console.log(sum)