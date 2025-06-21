import express from "express";

const app = express();
app.use(express.json())
const PORT = 8080 || process.env.PORT

const object = [
    {
        name:"John Ripper",
        age : 22,
        role : "DevOps"
    } ,
    {
        name : "Doe Rey",
        age : 26,
        role : "Backend Dev"
    },
    {
        name : "Joe Root ",
        age : 31,
        role : "Frontend Dev"
    }
]

const arr = [3,45,62,34,1]

app.get("/",(req,res) => {
    res.send(object)
})

app.post("/",(req,res) => {
    const {name,age,role} = req.body;
    object.push({name, age, role})
    return res.send(object)
})

app.get("/arr",(req,res) => {
    res.send(arr)
})

app.post("/arr",(req,res) => {
    const {number,index} = req.body;
    arr[index] = number;
    return res.send(arr)
})

app.listen(PORT,()=> {
    console.log("Server Running")
})
