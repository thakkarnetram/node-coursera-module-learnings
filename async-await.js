// async await basics
//  basically async await is when a normal func "behaves" like a promise

async function add(num) {
    return "Hello "  + num; //  behaves like resolve in promises
}

add(54)
    .then((data) => console.log(data))
    .catch((data) => {
        console.log(data)
    })

async function multi(num) {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            let x = 1;
            for (let  i = 1 ; i <= num ; i++) {
                x = x * i;
            }
            resolve(x)
        },3000)
    })
    return await promise;
}

multi(5)
    .then((data) => {
        console.log(data)
    })
    .catch((data) => {
        console.log(data)
    })
