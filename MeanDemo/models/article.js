// var mongodb=require('./mongodb');
// var Schema=mongodb.mongoose.Schema;
// var ArticleSchema=new Schema({
//     content:String,
//     titiel:String,
//     comment:String,
//     inserDate:Date
// });

// module.exports=mongodb.mongoose.model("Article",ArticleSchema);
var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var ArticleSchema = new Schema({
  content: String,
  titiel: String,
  inserDate: Date
});

var ArticleModel = mongodb.mongoose.model('Article', ArticleSchema);
//var MovieDAO = function () { };
//
//MovieDAO.prototype.save = function (obj, cb) {
//  var instance = new MovieModel(obj);
//  instance.save(cb);
//};

//module.exports =new MovieDAO();

module.exports =ArticleModel;
