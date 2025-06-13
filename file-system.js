// fs
import fs from 'fs';

fs.writeFileSync('hi.txt', 'hi');
fs.appendFileSync("hi.txt","\nhello")
const x = fs.readFileSync("hi.txt","utf-8");
console.log(x)
