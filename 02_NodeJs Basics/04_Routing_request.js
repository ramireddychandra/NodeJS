const http = require('http');
const server = http.createServer((req,res)=>{
    const url = req.url;
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
    res.write('<html>');
    res.write('<head><title> response data</title></head>');
    res.write('<body>');
    res.write('<h1> Hello this is header text from NodeJS</h1>');
    res.write('<ul><li>First Item</li><li>Second Item</li><li>Third Item</li></ul>')
    res.write('</body>');
    res.write('<html>');
});
server.listen(1115)