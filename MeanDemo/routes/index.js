// var express=require("express");
// var router=express.Router();
// router.get('/',function(req,res){
// 	res.render('index',{title:"好好学习全战"});
// });
// //res.render('index', { title: '向MEAN全栈开发挺进，www.upsnail.com' });
// module.exprots=router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: '向MEAN全栈开发挺进，www.upsnail.com' });
});

module.exports = router;