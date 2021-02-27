const animal1 = {
    name: "dog",
    age: 3,
    hasTail: true
}

class Animal {
    static type = "ANIMAL"

    constructor(options){
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log(`I am ${this.name}`)
    }
}

const animal = new Animal({
    name: "Animal",
    age: 5,
    hasTail: true
})

class Cat extends Animal{

    constructor(options){
        super(options)
        this.color = options.color
    }

    voice(){
        super.voice()
        console.log('owerride metod voice in class Cat')
    }

    get ageInfo(){
        return this.age * 7
    }

    set ageInfo(setAge){
        this.age = setAge
    }
}

const cat = new Cat({
    name: "Cat",
    age: 4,
    hasTail: true,
    color: "grey"
})

/*--------------*/

class Component{
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    hide(){
        this.$el.style.display = 'none'
    }

    show(){
        this.$el.style.display = 'block'
    }
}

class Box extends Component{
    constructor(options){
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color
    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red'
})

const box2 = new Box({
    selector: '#box2',
    size: 40,
    color: 'black'
})

class Circle extends Box{
    constructor(options){
        super(options)
        
        this.$el.style.borderRadius = '50%'
    }
}

const circle = new Circle({
    selector: '#circle',
    size: 150,
    color: 'green'
})

setTimeout(()=>{
    box1.hide()
},6000)