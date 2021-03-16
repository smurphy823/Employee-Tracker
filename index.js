const inquirer = require("inquirer");
require("console.table");
const connection = require("./connection");

function questions() {
    inquirer.prompt({
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: ["view all employees", "view all departments", "view all roles", "add employee", "add department", "add role", "update employee role"]
    }).then(function(data){
        if(data.choice === "view all employees"){
            viewEmployees()
        }else if(data.choice === "view all departments"){
            viewDepartments()
        }else if(data.choice === "view all roles"){
            viewRoles()
        }else if(data.choice === "add employee"){
            addEmployee()
        }else if(data.choice === "add role"){
            addRole()
        }else if(data.choice === "add department"){
            addDepartment()
        }else if(data.choice === "update employee role"){
            updateEmployeeRole()
        }else{
            console.log("Please choose another answer or press control C to quite")
        }
    })
}
questions() 

function viewEmployees(){
    connection.query("SELECT * FROM employee", function(error, response){
        console.table(response)
        questions()
    })
}

function viewDepartments(){
    connection.query("SELECT * FROM department", function(error, response){
        console.table(response)
        questions()
    })
}

function viewRoles(){
    connection.query("SELECT * FROM role", function(error, response){
        console.table(response)
        questions()
    })
}