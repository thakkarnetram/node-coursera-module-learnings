function callBack (callback) {
    console.log("I'm callback 1")
    callback(() => {
        console.log("Im Callback 3")
    })
}

function callback2 (callback) {
    console.log("Im callback 2 ")
    callback();
}

function random (a , call) {
    console.log("Main func call")
    callBack((x) => {
        callback2(x)
    })
    console.log("val of a " + a)
}

random(34,callBack)


// CON
// It is a situation In asynchronous JavaScript where extensive nesting of
// callback functions results in code that is hard to read and manage.
// The pyramid-like structure formed by multiple nested callbacks poses
// challenges for understanding and maintaining the code.
// callback hell looks like
// doSomething(() => {
//   doSomethingElse(() => {
//     doAnotherThing(() => {
//       // and so on...
//     });
//   });
// });
