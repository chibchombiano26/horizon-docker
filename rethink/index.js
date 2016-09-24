var r = require('rethinkdb');
var connection = "";

module.exports = {
  connect: function() {
    r.connect({
        db: process.env.PROJECT_NAME || 'HorizonWithDocker',
        rdb_host: process.env.RDB_HOST || 'localhost',
        rdb_port: process.env.RDB_PORT || 28015 
    }, function(err, conn) {
        connection = conn;
        console.log(err, conn);
    });
       
  },
       
  insert: function(data) {
    return new Promise(function (resolve, reject){
        r.table("posts").insert(data).run(connection, function(result){
            console.log(result);
            resolve(result);
        })
    });
    
  }
};