// basic syntax & concept
// promises are basically used to avoid callback hell and manage code in asynchronous manner

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let a = 8;
        if (a === 8) resolve("Kept ")
        else reject("Broke")
    },3000)
})

promise.then((response) => {
    console.log(response);
},(response) => {
    console.log(response)
})

// Ex api call
fetch("https://dummyjson.com/test")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("unable to fetch data" + error)
    })
