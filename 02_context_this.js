//-----context + zamikanie

Array.prototype.arrayPow = function(pow) {
    return this.map((item) => {
        return item * pow
    })
}

const array = [1, 2, 3, 4, 5, 6]

const arrayPow = array.arrayPow(3)

console.log(arrayPow)



//---------------------
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {
    name: 'Mixail',
    age: 22,
    job: 'Frontend'
}

function bind(pers, logP) {
    logP.call(pers)
}

bind(person1, logPerson)


