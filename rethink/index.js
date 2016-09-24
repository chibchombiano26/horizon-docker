var r = require('rethinkdb');
var connection = "";

var dataFactory = {};

  dataFactory.connect = function() {
    console.log("Ports", process.env.RDB_HOST, process.env.RDB_PORT);
    
    return new Promise(function (resolve, reject){
        r.connect({
            db: process.env.PROJECT_NAME || 'HorizonWithDocker',
            host: process.env.RDB_HOST || 'localhost',
            port: process.env.RDB_PORT || 28015 
        }, function(err, conn) {
            connection = conn;
            console.log(err, conn);
            resolve(conn);
        });
    });
  },
       
  dataFactory.insert = function(data) {
    
    return new Promise(function (resolve, reject){
        r.table("posts").insert(data).run(connection, function(result){
            console.log(result);
            resolve(result);
        })        
    });
    
  }

module.exports = dataFactory;