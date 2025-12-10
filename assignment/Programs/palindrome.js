 //Palindrome 123 321

let num = 242
let entered = num
let rev = 0 //321

while (num > 0){
    rem = num % 10
    rev = rev * 10 + rem
    num = Math.floor(num / 10)
}

console.log(entered + " Reversed number is "+ rev)

    if (entered === rev){
        console.log("this number is palindrome")
    }
    else{
        console.log("number is not a palindrome")
    }
