const mysql = require("mysql");


const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kelvonn1*",
    database: "employee_trackerDB"
})


connection.connect(function(error){
    if(error)throw error
})

module.exports = connection