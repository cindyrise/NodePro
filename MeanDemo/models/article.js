var mongodb = require('./mongodb');
var Schema = mongodb.mongoose.Schema;
var ArticleSchema = new Schema({
  content: String,
  title: String,
  inserDate: Date
});

var ArticleModel = mongodb.mongoose.model('Article', ArticleSchema);
module.exports =ArticleModel;
