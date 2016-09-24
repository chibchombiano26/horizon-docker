var r = require('rethinkdb');
var connection = "";

var dataFactory = {};

  dataFactory.connect = function() {
    return new Promise(function (resolve, reject){
        r.connect({
            db: process.env.PROJECT_NAME || 'HorizonWithDocker',
            rdb_host: process.env.RDB_HOST || 'localhost',
            rdb_port: process.env.RDB_PORT || 28015 
        }, function(err, conn) {
            connection = conn;
            console.log(err, conn);
            resolve(conn);
        });
    });
  },
       
  dataFactory.insert = function(data) {
    
    return new Promise(function (resolve, reject){
        dataFactory.connect().then(function(conn){

            r.table("posts").insert(data).run(conn, function(result){
                console.log(result);
                resolve(result);
            })

        })        
    });
    
  }

module.exports = dataFactory;