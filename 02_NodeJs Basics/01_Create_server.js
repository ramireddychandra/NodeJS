// Creating a Server ... 
//  Importing Syntax :


// //  Method -I (Creating a Server)
// const http = require('http'); // Even though we put local file, First it looks for global .

// // Request Listener Function
// function rqListener(req,res){

// };

// // various methods and functions are avaiable in this module.
// http.createServer(rqListener);

// //  Method II (Creating a Server)
// const http = require('http');
// http.createServer(function(req,res){
// })

//  Method III (Creating a Server)
const http = require('http');
// The requestListener is a function which is automatically added to the 'request' event.
const server = http.createServer((req,res)=>{
    console.log(req)
})

server.listen(1111)