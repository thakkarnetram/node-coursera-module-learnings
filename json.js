const obj = {
    name:"John Riper",
    age : `Age: ` + 20,
    dead : false
}

const a = JSON.stringify(obj)
const b = JSON.parse(a)
console.log(a)
console.log(typeof (a) )
console.log(b)
console.log(typeof (b))
