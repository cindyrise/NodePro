// var buf=new Buffer(256);
// var len=buf.write("l love cuifang");
// console.log(len);

// buf=new Buffer(25);
// for (var i = 0; i < 20; i++) {
// 	buf[i]=i+97;
// };

// console.log(buf.toString("ascii",0));
// console.log(buf.toString("ascii",0,9));

// var buffer1 = new Buffer('菜鸟教程 ');
// var buffer2 = new Buffer('www.runoob.com');
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());


//oncat
var fs = require('fs');
fs.readFile('me.png', function(err, orgin_buffer) {
	console.log(Buffer.isBuffer(orgin_buffer));

	fs.writeFile('metoo.png', orgin_buffer, function(err) {
		if (err) {
			console.log(err)
		}
	})

	var base64img = orgin_buffer.toString("base64");
	console.log(base64img);
	var deBase64img = new Buffer(base64img, 'base64')
	console.log(Buffer.compare(orgin_buffer, deBase64img));
	fs.writeFile('deme.png', deBase64img, function(err) {
		if (err) {
			console.log(err)
		}
	});
})


//var buf = new Buffer('me.png'); console.log(buf.toString('base64'));