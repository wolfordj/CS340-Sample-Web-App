var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs340_wolfordj',
  password        : '7235',
  database        : 'cs340_wolfordj'
});
module.exports.pool = pool;
