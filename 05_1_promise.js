

 function resolve (value){
    return value
 }
// const reject = function(){
//
// }

const mPromise = function(){
    this.allFun = []
    this.lastResult
}
mPromise.prototype.then = function (newFun) {
    this.allFun.push(newFun)
}
mPromise.prototype.resolve = function (arg) {
    this.lastResult = arg
    for(let i = 0; i < this.allFun.length; i++) {
        const item = this.allFun[i];
        const res = item(this.lastResult);
        if (res instanceof mPromise) {
            const lastFun = this.allFun.slice(i+1);
            res.allFun = lastFun;
            break;
        } else {
            this.lastResult = res;
        }
    }
}

const prom = new mPromise.resolve(() =>{
    setTimeout(()=>{
        console.log('Подготовка данных...')
        const data = 'data'
        return(data)
    },4000)
})
prom.then((data)=>{
    console.log('Promise END', data)
})