const url=require('url');

const myURL = new URL("https://hpparamsolution.org:0369");
myURL.pathname='/';
myURL.search="?name=Jagrut";
myURL.hash="#secretfile.ppt";

console.log(myURL);