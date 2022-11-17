const http = require('http');

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    // case-I 
    // res.write('<html>');
    // res.write('<head><title> response data</title></head>');
    // res.write('<body>');
    // res.write('<h1> Hello this is header text from NodeJS</h1>');
    // res.write('<ul><li>First Item</li><li>Second Item</li><li>Third Item</li></ul>')
    // res.write('</body>');
    // res.write('<html>');
    // Case -II 
    res.write(`<html>
    <head>
    <title>
    response by string literal
    </title>
    </head>
    <body>
    <h1> Hello this is new nodeJs server</h1>
    <ul>
    <li> First</li>
    <li> second</li>
    <li> third</li>
    </ul>
    </body>
    </html>`);
    res.end();
});
server.listen(1113);