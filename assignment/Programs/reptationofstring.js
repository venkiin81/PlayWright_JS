//WAP to check how many times a string is repeated 

let str = 'this is a last test for javascript program a using javascript and javascript language';

let count = 0

let value = str.indexOf('javascript')


while (value != -1){

    count++
    value = str.indexOf('javascript',value+1)
}

console.log(count)
