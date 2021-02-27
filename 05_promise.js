const prom = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Подготовка данных...')
        const data = {
            server: 'aws',
            port: '8080',
            data: {
                login: 'andrey@gmail.com',
                password: '1234'
            }
        }
        resolve(data)
    },2000)
})

prom.then((data) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Модификация данных...')
            data.modified = true
            resolve(data)
        }, 2000)
    })
}).then((data) => {
    console.log('Данные модифицированы...')
    return data
}).then((data) => {
    console.log('Данные: ', data)
}).catch((err) => {console.error('Error!!! ', err)
}).finally(() => {
    console.log('Подготовка данных завершена.')
})

//-------------------

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Sleep ${ms} ms`)
            resolve()
        },ms)
    })
}

Promise.all([sleep(2000),sleep(5000), sleep(6000)]).then(() => {
    console.log('Promise all!')
}).finally(() => {console.log('Finally promise all!')})


Promise.race([sleep(2000),sleep(5000), sleep(6000)]).then(() => {
    console.log('Promise race!')
}).finally(() => {console.log('Finally promise race!')})