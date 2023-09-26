const http = require("http");
const port = process.env.port || 3000;

http.createServer((req,res) => {
    res.write("Hello world");
    res.end()
}).listen (port, () => {
    console.log(`Server running on localhost: ${port}`);
});