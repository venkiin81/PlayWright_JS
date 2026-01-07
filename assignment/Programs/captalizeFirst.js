//WAP to capitalize first letter

let str = 'venkatesh'

console.log(str[0].toUpperCase()+str.slice(1,str.length))


function capitalize(word){

    if(word.length==0 || typeof str != 'string'){
        return ''
    }
    return word.charAt(0).toUpperCase() + word.slice(1)

}

const str1 = 'vinod'

const upperword = capitalize(str1)

console.log(upperword)