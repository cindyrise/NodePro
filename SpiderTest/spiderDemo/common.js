var http = require('http');
var querystring = require('querystring');
var postData = querystring.stringify({
	'content': '谢谢大牛的分享',
	'cid': 348
});


var option = {
	hostname: 'www.imooc.com',
	port: 80,
	path: '/course/docomment',
	method: 'POST',
	headers: {
		'Accept': 'application/json, text/javascript',
		'Accept-Encoding': 'gzip, deflate',
		'Accept-Language': 'zh-CN,zh;q=0.8',
		'Connection': 'keep-alive',
		'Content-Length': postData.length,
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie': 'PHPSESSID=bina3l90k4a54cqq3j33jeedb6; imooc_uuid=3de298dd-f024-497e-a368-72212fa30432; imooc_isnew=1; imooc_isnew_ct=1463903763; IMCDNS=0; loginstate=1; apsid=U4OGE3ZDgwZjYxODNmNzZhNzljODE2NjI5Mzc1OTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjgwNjE1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB5aHh5YW5neWlAMTYzLmNvbQAAAAAAAAAAAAAAAAAAADQ3YzYzOWU0MWE1Mzk5YTkxOTcxZGZiNTMyMDk4ZGE2sWZBV7FmQVc%3DZW; last_login_username=yhxyangyi%40163.com; cvde=57416613d57f1-14; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1463903768; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1463903995',
		'Host': 'www.imooc.com',
		'Origin': 'http://www.imooc.com',
		'Referer': 'http://www.imooc.com/comment/348',
		'User-Agent': 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
		'X-Requested-With': 'XMLHttpRequest'
	}
}

var req = http.request(option, function(res) {
	console.log('status:' + res.statusCode);
	//console.log('status:'+JSON.stringify(res.headers));
	res.on('data', function(chunk) {
		//var buf = new Buffer('我讀書成功了');
		//console.log(Buffer.concat([buf,chunk]).toString())；
		console.log(Buffer.isBuffer(chunk));
		console.log(chunk.toString("utf8"));
	});
	res.on('end', function() {
		console.log("WANBI");
	});
});
req.on("error", function() {
	console.log('出错了');
})
req.write(postData);
req.end();