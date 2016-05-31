


var express = require("express"); 
var mongoose = require('mongoose');//引入数据模式
var session=require("express-session");//建立回话
var methodOveride=require('method-override');//让支持http方法，支持，入put，delete等
var bodyparse=require('body-parser');

var mongoseStore=require("connect-mongo")(session);//持久回话
var morgan=require('morgan');//打印服务器日志console.log()
var models = require('./usermodel');

var User = models.User;

var db=mongoose.connect('mongodb://127.0.0.1:27017/test');
console.log('mongodb://127.0.0.1:27017/test');
var app = express();
app.use(morgan('dev'));
app.use(methodOveride());
app.use(bodyparse.json());
app.use(session({
    secret: '12345',
    name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
    cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
    resave: false,
    saveUninitialized: true,
    store:new mongoseStore({
        url:'mongodb://127.0.0.1:27017/test',
        collection:'session'
    })
}))

app.post('/',function(req,res){
 var user=new User(req.body);
 console.log(req.body);
//console.log(JSON.stringify(req.body);
    //res.send("hllow");
 // user.save(functon(err){
 //    if (err) {
 //       return next(next);
 //    }else{
 //        res.json(user);
 //    }
 // })
 // 
 user.save();
})
// init data. Use "get" to simplify 
app.get('/init', function(req, res) { 
    var user = new User({ 
        'email' :'nowind_lee@qq.com',
        'name' :'Freewind',
        'password':'12kksjk'
    }); 
    if (req.session.lastVisit) {
        console.log("有sessionDate了"+req.session.lastVisit);
    }
    if (req.session.user) {
        console.log("有sessionUser了"+JSON.stringify(req.session.user));
    }
    console.log("session心动的");
    req.session.lastVisit=new Date();
    req.session.user=user;
    user.save(); 
    res.send('Data inited'); 
});

app.get('/users', function(req, res) { 
    User.find(function(err, doc) { 
        res.json(doc); 
    }); 
});


app.listen(40010);