import http from "http";

const server = http.createServer((req,res) => {
    if(req.url === "/") {
        return res.end("Home")
    } else if (req.url === "/about") {
        return res.end("About")
    }
    else if (req.url === "/contact") {
        return res.end("Contact")
    }
})

server.listen(8080,() => {
    console.log("Server Running ")
})
