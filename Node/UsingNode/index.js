const http=require('http');
const fs=require('fs');
const path=require('path');

// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         const filePath=path.join(__dirname,'index.html');
//         fs.readFile(filePath,(err,content)=>{
//             if(err) throw err;
//             res.writeHead(200,{'content-type':'text/html'});
//             res.end(content);
//         });
//     }
//     else{
//         res.writeHead(404);
//         res.end('Page not found');
//     }
// })
// server.listen(3000,()=>{
//     console.log("server is running in localhost 3000")
// })


const server=http.createServer((req,res)=>{
    let filePath='';
    let contentType='text/html';

    if(req.url==='/'){
        filePath=path.join(__dirname,'index.html');
    }
    else if(req.url==='/about'){
        filePath=path.join(__dirname,'about.html');
    }
    else{
        filePath= null;
    }
    if(filePath){
        fs.readFile(filePath,(err,content)=>{
        if(err){
            res.writeHead(500);
            res.end("server closed")
        }
        else{
            res.writeHead(200,{"content-type":contentType});
            res.end(content);
        }
        })
    }else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 page not found</h1>")
    }
})
server.listen(3000,()=>{
    console.log("Server is running in the localHost of 3000")
})