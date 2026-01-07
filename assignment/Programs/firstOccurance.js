//WAP to find count occurrence of a character 

let chr = 'venkateshprasad'

const chrr = 'y'
let value = chr.indexOf(chrr) //1
let count = 0

while (value !== -1){

    count++
    
    value = chr.indexOf(chrr,value+1)
}

console.log(count)
