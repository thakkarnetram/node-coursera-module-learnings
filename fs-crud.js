import fs from "fs";
let fileName = "crud/crud.txt";
function createDir(dir){
    if(dir != null || dir !== undefined) {
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(`${dir}`)
        } else {
            console.log("Directory exists")
        }
    }
}
createDir("crud");

fs.writeFileSync(fileName,"Crud File")
fs.appendFileSync(fileName,"\nCrud Appended file")
