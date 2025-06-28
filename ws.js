import express from "express";
import WebSocket from "ws";
import http from "http";

const app = express();

const server = http.createServer(app);

const socket =  new WebSocket.Server({server})

socket.on('connection',(event) => {
    event.on("message",(data) => {
        console.log(data)
    })
    event.send("Hello")
})

app.get('/',(req,res) => {
    res.send("Hello")
})

server.listen(4000,()=>{
    console.log("Server running")
})

