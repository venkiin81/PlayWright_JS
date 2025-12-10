//first see if it's divisible by 4. If it is divisible by 100, 
// it's only a leap year if it's also divisible by 400. Otherwise, 
// if it's divisible by 4 but not by 100, it is a leap year

let year = 2025;


    if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
            console.log(year+ " leap year")
    }
    else{
        console.log(year+" not a leap year")
    }
    