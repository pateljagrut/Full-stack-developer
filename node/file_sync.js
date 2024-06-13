const {readFileSync, writeFileSync}=require("fs");

const first= readFileSync("myfile.txt");
console.log(first);

writeFileSync("Myfile.txt","");