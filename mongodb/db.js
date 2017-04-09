'use strict';

import mongoose from 'mongoose';
import config from 'config-lite';
mongoose.connect(config.url);
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open' ,() => {
	console.log('连接数据成功')
})

export default db;


// var mongoose = require('mongoose');
// var util = require("util");

// function MongooseKeeper() {
//     this.db = mongoose.createConnection();
//     this.open_count = 0;
// }
// MongooseKeeper.prototype.config = function(conf) {
//     // body...
//     var options = {
//         db: { native_parser: true },
//         server: {
//             poolSize:4
//         }
//     };


//     var constr = "";
//     if(process.env.MONGO_DB_STR){
//         constr = process.env.MONGO_DB_STR ;
//     }
//     else{
//         //'mongodb://user:pass@localhost:port/database'
//         constr = util.format('mongodb://%s:%s@%s:%d/%s', conf.userid,conf.password,conf.host,conf.port,conf.database);
//     }
//     this.dbUri = constr;
//     this.options = options;
  
// }
// MongooseKeeper.prototype.open =function() {

//     this.open_count++;
//     if(this.open_count ==1 && this.db.readyState == 0)
//     {        
//         this.db.open(this.dbUri,this.options,function() {
//             // body...
//             console.log("db opened");
//         });
//     }
// }
// MongooseKeeper.prototype.close =function() {

//     this.open_count--;
//     if(this.open_count == 0 )
//     {
//         this.db.close(function(){
//             console.log("db closed");
//         });
//     }
  


// }
// MongooseKeeper.prototype.use = function(action,callback) {
//     //OPEN
//     var self = this;
//     self.open();
//     action.call(null,function() {
//         //CLOSE
//         console.log("正在访问的数据库请求量"+self.open_count);
//         self.close();
//         callback.apply(null, arguments);
//         //DONE
//         self =null;
//     })
// };

// exports = module.exports = new MongooseKeeper();