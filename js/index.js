const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        database: "employee_db",
        password: "Montana1100$$",
    },
console.log("Connected to the employee_db database.")
);

function init() {
    return inquirer
    .prompt([
        {
            type: "localhost",
            name: "root",
            message: "employee_db",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role",
                "Exit",
            ],
        },
    ])
}
//build prompt for employee data tables
