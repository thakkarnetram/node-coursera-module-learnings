// cluster module to scale an Express server across all CPU cores
import express from "express";
import cluster from "cluster";
import os from  "os";

const numOfCpu = os.cpus().length;
const app = express();
const PORT = 3000;

if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`)

    for (let i = 0 ; i < numOfCpu; i++){
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    app.listen(PORT, (err) => {
        if (err) {
            console.log("Error in server setup");
        } else {
            console.log(`Worker ${process.pid} started`);
        }
    });
}
