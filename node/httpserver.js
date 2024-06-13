const http = require("http");
require('dotenv').config();
const port = process.env.PORT;
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    if (req.url == '/') {
        res.end("<h1>Hello</h1><h4><i>My name is Jagrut.</i></h4>")
    }
    else if (req.url == '/home') {
        res.end("<h1>Hello</h1><h4><i>This is home page.</i></h4>")
    }
})

server.listen(port, () => {
    console.log(`Server is listening on port http://localhost:${port}`)
})

