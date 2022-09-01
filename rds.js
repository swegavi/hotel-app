var mysql = require('mysql');

var rdsUrl = 'hotel-app-database.cluster-ro-c9g1oubtkmmm.eu-west-1.rds.amazonaws.com';
var password =  'That10day10go!';
var user = 'admin';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
