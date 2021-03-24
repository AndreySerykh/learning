class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }

async function loadJson(url){
    let response = await fetch(url)

    if(response.status == 200){
        let data = await response.json()
        return data
    } else
        throw new HttpError(response)
}

/* loadJson('no-such-user.json')
    .catch((e)=>{console.log("Error- ", e)})
    .then(function(data){
        console.log(data);
    })
 */



async function demoGithubUser(){
    let user 
    do {
        let name = prompt('Введите логин?', 'AndreySerykh')
        try{
            user = await loadJson(`https://api.github.com/users/${name}`)
            break
        } catch (err){
            if (err instanceof HttpError && err.response.status == 404) {
                alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
              } else {
                throw err;
              }
        }
    } while (true);

    alert(`Полное имя: ${user.name}.`);
    return user;
}

/* demoGithubUser()
    .then(user => {
        console.log('after demoGithubUser() get data ' + JSON.stringify(user));
    })
 */

////////////////////////////////
function deley(ms){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(console.log("timeout: " + ms))
        }, ms)
    })
}

/* deley(2000)
    .then(() =>{
        console.log('прошло 2000 мс');
    }) */

async function asyncFetch(){
    try{ 
        await deley(2000)

        let response = await fetch('https://jsonplaceholder.typicode.com/users/2')
        let data = await response.json()
        console.log(JSON.stringify(data));
    } catch (err) {
        console.error('Error: ' + err);
    }
}

asyncFetch()