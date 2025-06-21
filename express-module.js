import express from "express";

const app = express();
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

app.get("/",(req,res) => {
    res.send(object)
})

app.listen(PORT,()=> {
    console.log("Server Running")
})
