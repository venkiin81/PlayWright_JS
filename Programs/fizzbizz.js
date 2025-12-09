// 1) if it is divisible by 3 , print fizz
// 2) if it is divisible by 5 , print buzz
// 3) if it is divisible by both 5 and 3 print fizz buzz

for (let i=1;i<=50;i++){
    if(i%3 == 0 & i%5 == 0){
        console.log(i+" fizbuzz");
    }
    else if( i%3 == 0){
        console.log(i+" fizz");
    }
    else if(i%5 == 0){
        console.log(i+" buzz");
    }
}
