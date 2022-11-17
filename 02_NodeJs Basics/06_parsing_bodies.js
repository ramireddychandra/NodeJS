const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    if (url === '/'){
       
        res.write('<html>');
        res.write('<head>');
        res.write('<title>❤ Response Main Page</title>');
        res.write('</head>');
        res.write('<body>');
        res.write('<h1>USer Details </h1>')
        res.write('<form action="/user_email" method="POST"><input type= "email" name="user_email"><input type= "text" name="username"><button type="submit">send</button></form>')
        res.write('</body>');
        res.write('</html>');
        return res.end();

    }
    if (url === '/user_email'){
        // res.write('<html>');
        // res.write('<head>');
        // res.write('<title>❤ Response Main Page</title>');
        // res.write('</head>');
        // res.write('<body>');
        // res.write('<h1>submitted email Details </h1>')
        // res.write('</body>');
        // res.write('</html>');
        // return res.end();
        const body =[];
        req.on('data',(chunk)=>{
            body.push(chunk);
        });

        req.on('end', () =>{
            const parsebody = Buffer.concat(body).toString();
            const dataRecievedbykey_value = parsebody.split('&');
            dataRecievedbykey_value.forEach((data,i)=>{
                fs.writeFileSync(`UserEmail_Data${i+1}.txt`,data.split('=')[1]);
            })

            // fs.writeFileSync('UserEmail_Data.txt',parsebody.split('&'));
        })

        
        res.statusCode =302;
        res.setHeader('Location','/');
        return res.end();

    }
});
server.listen(1125);