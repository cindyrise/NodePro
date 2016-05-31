var express=require('express');
var router=express.Router();
var Article=require('../models/article');
//开始自己的服务端路由
//
//method get
router.get('/',function(req,res,next){
	Article.find(function(err,getData){
		if(err) next(err);
	    return res.json(getData);
	});
});

//post
router.post('/',function(req,res,next){
	console.log(req.body);
	Article.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


//
router.get('/:id',function(req,res,next){
	Article.findById(req.params.id,function(err,getData){
		if(err) next(err);
	    return res.json(getData);
	});
});

router.put('/:id',function(req,res,next){
	Article.findByIdAndUpdate(req.params.id,{$set:{date:new Date()}},req.body,function(err,putData){
		if(err) next(err);
	    return res.json(putData);
	});
});

//delete
router.delete('/:id', function(req, res, next) {
  Article.findByIdAndRemove(req.params.id, req.body, function (err, deletedData) {
    if (err) return next(err);
    res.json(deletedData);
  });
});

module.exports = router;