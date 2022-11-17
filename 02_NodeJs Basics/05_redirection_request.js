const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.write('<html>');
        res.write('<head><title> response data</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST"><input type="email" name="user_email"><button type="submit">send</button></form>');
        res.write('<ul><li>First Item</li><li>Second Item</li><li>Third Item</li></ul>')
        res.write('</body>');
        res.write('<html>');
        return res.end();
    }
    if (url === "/message" && method ==="POST"){
        fs.writeFileSync('UserEmail_Data.txt','dummy');
        res.statusCode =302;
        res.setHeader('Location','/');
        return res.end();
    }
});
server.listen(1118);