const person = {
    name: 'Andrei',
    age: 33,
    greet: () => console.log('greet')
}

const person2 = new Object({
    name: 'Andrei',
    age: 33,
    greet: () => console.log('greet')
})

function Add(a, b) {
    return a + b
}

console.log('person: ', person)
console.log(person.toString());
if (person.isPrototypeOf(person2))
    console.log('person exsist obj person2')
else
    console.log('person not exsist obj person2')

Object.prototype.secondName = 'Serykh'
person.About = () => {
    console.log(`Name: ${person.name}, SekondName: ${this.secondName}`)
}

const lena = Object.create(person)
lena.name = 'Lena'
lena.age = 17

const str = new String('new string')
const int_ = new Number(5)

