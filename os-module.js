import os from "os";

console.log(os.hostname())
console.log(os.type())
console.log(os.platform())
console.log(os.arch())
console.log(os.cpus())
console.log(os.freemem()/1024/1024/1024)
console.log(os.totalmem()/1024/1024/1024)
console.log(os.uptime())
console.log(os.loadavg())
console.log(os.networkInterfaces())
