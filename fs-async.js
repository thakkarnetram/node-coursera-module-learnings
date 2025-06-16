import fs from "fs";

// in built functions with sync in it are async so they need a callback in order to execute it

let fileName = "abc.txt";
let content = "This is a text file"

fs.writeFile(fileName, content, (x) => {
    if (!x) {
        console.log("Success")
    } else {
        throw new Error("Could not process")
    }
})

function crud() {
    fs.writeFile("abcd.txt", content, (err) => {
        if (!err) {
            fs.appendFile("abcd.txt", `\n${content} New content`, (err) => {
                if (!err) {
                    fs.readFile("abcd.txt", 'utf8', (err, data) => {
                        if (!err) {
                            console.log(data)
                        } else {
                            throw new Error("Error reading")
                        }
                    })
                } else {
                    throw new Error("Error appending")
                }
            })
        } else {
            throw new Error("Error writing")
        }
    })
}

crud();
