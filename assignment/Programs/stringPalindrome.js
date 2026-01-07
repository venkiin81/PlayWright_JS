//  Program 14: WAP to check if given string is Palindrome
let str = 'wiw'
let rev=''

for (let i = str.length-1; i>=0; i--){

    rev += str[i]

}

if(str==rev){
    console.log('string Palindrome')
}

else{
    console.log('not a palindrome')
}