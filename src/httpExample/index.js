const http = require("http");
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    return res.end(
    JSON.stringify({
        message: `usando res: ${req.method}`,
    })
    );
});

server.listen(PORT, () => {
console.log(`server running at port: ${PORT}`);
});
