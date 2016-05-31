
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('test.json')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('input.txt.gz'));
  
console.log("文件压缩完成。");
// var fs = require('fs');
// var data = '';
// var readStream = fs.createReadStream('test.json');
// var writeSteam = fs.createWriteStream("test1.json");

// readStream.pipe(writeSteam);
// console.log("done");
// readStream.setEncoding('utf8');
// readStream.on('data', function(chunk) {
// 	console.log('12211');
// 	if (writeSteam.write(chunk) === false) {//是否換成去還有數據，如有，readstram暫定
// 		readStream.pause();
// 	};
// 	data += chunk;
// 	console.log(data.toString("utf8"));
// });

// readStream.on("end", function() {
// 	console.log("讀取挖出");
// 	writeSteam.end();
// });

// readStream.on('error', function() {
// 	console.log('error');
// });

// writeSteam.on("drain",function(){
// 	console.log("done");
// 	readStream.resume();
// });

// var fs = require("fs");
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('test.json');

// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
// 	console.log(2);
//    data += chunk;

//    console.log(data.toString('UTF8'));
// });

// readerStream.on('end',function(){
//    console.log(data);
// });

// readerStream.on('error', function(err){
//    console.log(err.stack);
// });

// console.log("程序执行完毕");