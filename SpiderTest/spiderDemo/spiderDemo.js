var http=require("http");
var cheerio=require("cheerio");
var url='http://www.imooc.com/learn/348';

function filterCharpter(html){
var $=cheerio.load(html);
var chapters=$('.chapter');
var courseData=[];
chapters.each(function(item){
	var chapter=$(this);
	var charpterTitle=chapter.find("strong").text();
	var videos=chapter.find(".video").children('li');
    var chapterData={chapterTitle:charpterTitle,
    vedios:[]
     }

     videos.each(function(item){
        var video=$(this).find(".studyvideo");
        var videoTitle=video.text();
        var id=video.attr('href').split('video/')[1];  
        chapterData.vedios.push({
        	videoTITEL:videoTitle,			
        	id:id
        });    
     });
courseData.push(chapterData);
})
return courseData;
}
http.get(url,function(res){
	var html="";
	res.on("data",function(data){
		html+=data;
	})
	res.on("end",function(){
	var couse=filterCharpter(html);
	couse.forEach(function(item){
		console.log(item.chapterTitle+'\n');
		item.vedios.forEach(function(item){
			console.log( item.videoTITEL+'  ['+item.id +' ]\n');
		})
	})
	})
}).on('error',function(){
	console.log("报错了");
})