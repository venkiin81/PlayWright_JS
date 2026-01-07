class Animal{

    legs = 4
    tail = true

    Dog(){
        console.log('bark')
    }

    Lion(){
        sound = 'roar'
    }

}

const dog = new Animal();

console.log(dog.legs)
dog.Dog()
