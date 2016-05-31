const http=require("http");
//const hostname="127.0.0.1";
//const port=3000;
// const server=http.createServer(function(req,res){
// 	res.writeHead(200,{'Content-Type':'text/plain'});
// 	res.end('hello world');
// }).listen(3900,'127.0.0.1');
// console.log("node服务启动");

const server =http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader("Content-Type",'text/plain');
	res.end('lamber');
});

server.listen(3000,'127.0.0.1');
console.log("high起来");