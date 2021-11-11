var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root1234",
    database: "ops-v2"
});

con.connect(function (error) {
    if(error) {
        throw error;
    }
    var sql = "select fullname from employee order by id limit 1";
    con.query(sql, function (error, result) {
        if(error) throw error;
        console.log(result);
    });
});