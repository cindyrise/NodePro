var mongoose=require('mongoose');
var config=require('../config');

mongoose.connect(config.db,function(err){

	if (err) {
		console.log(config.db);
        console.error('DB连接失败');
        process.exit(1);
    }
});

exports.mongoose=mongoose;

