//Sum of even number from 1 to 50 

let num = 1;
let sum = 0;
while(num<=50){
    if(num%2==0){
        sum += num;
    }
    num++;

}
console.log(sum);