// Synchronous everything executes one after the other
const a = 1;
const b = 23;
// console.log(a)
// console.log(b)

// Asynchronous everything executes independently in the background
//  const x - 1
// setTimeOut const b - some data 1
// const e - some data 2
// here if 'x' executes and then 'b' is executing and is taking time for that execution after "X"
// amount of time 'e' would execute and 'b' would execute in background thus not hampering the flow of code

const x = "1st";
const y = "2nd";
const z = "3rd";
console.log(x)
setTimeout(() => {
    console.log(y)
},3000)
console.log(z)
