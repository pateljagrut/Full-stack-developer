const fs= require("fs");

let a=10;
let b=20;
fs.writeFile("myfile.txt","This is data",()=>{
    console.log("Written to file");
});

console.log(a+b);
console.log("Finish reading file.");