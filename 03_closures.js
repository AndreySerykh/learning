// closures -- zamikaniya

const privateVar = function(defVar) {
    return function (setVar) {
        if (setVar === undefined)
            return defVar 
        else {
            defVar = setVar
            return true
        }
    }
}

const privateWidth = privateVar(10)//initialithation privat var;
const getWidth = () => privateWidth() // Getter
console.log(`GetWidth default: ${getWidth()}`)
const setWidth = (_var) => privateWidth(_var)// Setter
console.log(`SetWidth: ${setWidth(26)}`)
console.log(`GetWidth after set: ${getWidth()}`)



///----------------------
const setDomen = (domen) => {
    return (url) => {
        return `https://${url}.${domen}`
    }
}

const ruDomen = setDomen('ru')
const googleURL = ruDomen('google')
console.log(`Google: ${googleURL}`)
