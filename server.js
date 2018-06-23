const http = require('http');
// const fs = require('fs');
const express = require('express');

// function app(req,res){
//   const data = fs.readFileSync('./index.html');
//   console.log(req.method);
//   if(req.url == '/')
//     res.write(data);
//   else
//     res.write('Not available');
//   res.end();
// }

let app = express();
app.use(express.static('./'));
const myServer = http.createServer(app);
myServer.listen(8000, ()=> console.log("Server is listening at 8000"));
