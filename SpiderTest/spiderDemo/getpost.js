var http = require('http');
var url = require('url');
var util = require('util');
var querystring=require('querystring');//gget方式
// var server=http.createServer(function(req,res){
//      res.writeHead(200,{"Content-type":"text/plain"});
//      res.end(util.inspect(url.parse(req.url,true)));
// });
// server.listen(3000);


//post方式


var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/plain"});
    var post="";
    req.on('data',function(chank){
    	post=post+chank;
    });
    req.on('end',function(){
     post=querystring.parse(post);
     res.end(util.inspect(post));
    })
}).listen(3000);
// var http = require('http');
// var url = require('url');
// var util = require('util');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.end(util.inspect(url.parse(req.url, true)));
// }).listen(3000);