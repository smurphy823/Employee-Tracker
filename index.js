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
            viewRole()
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

function viewRole(){
    connection.query("SELECT * FROM role", function(error, response){
        console.table(response)
        questions()
    })
}

function addEmployee(){
    inquirer.prompt([
        {
           type: "input",
           name: "first_name",
           message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
         },
         {
            type: "input",
            name: "role_id",
            message: "What is the employee's role id?"
         },
         {
            type: "input",
            name: "manager_id",
            message: "What is the employee's managers id?",
            default: null
         },
    ]).then(function(data){
        connection.query("INSERT INTO employee SET ?", {
            first_name: data.first_name,
            last_name: data.last_name,
            role_id: data.role_id,
            manager_id: data.manager_id
        },function(error){
            if(error)throw error
            console.log("added employee")
            questions()
        })
    })
}

function addDepartment(){
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "What is the department that you would like to add?",
            default: null
        },
    ]).then(function(data){
        connection.query("INSERT INTO department SET ?", {
            name: data.department
        },function(error){
            if(error)throw error
            console.log("added department")
            questions()
        })
    })
}

function addRole(){
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What role would you like to add?"
        },
        {
            type: "input",
            name: "department_id",
            message: "Department id number"
        },
        {
            type: "input",
            name: "salary",
            message: "Salary for this position"
        },
    ]).then(function(data){
        connection.query("INSERT INTO role SET ?", {
            title: data.title,
            department_id: data.department_id,
            salary: data.salary
        },function(error){
            if(error)throw error
            console.log("added role")
            questions()
        })
    })
}