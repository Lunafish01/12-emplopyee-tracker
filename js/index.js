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
    
//build function to select from start menu and move to the newly selected menu
function init() {
    return inquirer
    .prompt([
        {
            type: "list",
            name: "menuSelect",
            message: "What would you like to do?",
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
            default: "View All Employees",
        },
    ])
    .then(({ menuSelect }) => {
        switch (menuSelect) {
            case "View all Departments":
                console.clear();
                viewDepartmentsMenu();
                break;
            case "View all roles":
                console.clear();
                viewAllRolesMenu();
                break;
            case "View all employees":
                console.clear();
                viewAllEmployeesMenu();
                break;
            case "Add a department":
                console.clear();
                addDepartmentMenu();
                break;
            case "Add a role":
                console.clear();
                addRoleMenu();
                break;
            case "Add an employee":
                console.clear();
                AddEmployeeMenu();
                break;
            case "Update an employee role":
                console.clear();
                updateEmployeeRoleMenu();
                break;
            case "Exit":
                console.clear();
                exit();
                break;
        }
    });
}

function exit() {
    console.clear();
    console.log("Exiting employee records menu.")
}

//build function to view ALL from the department table
//show department names and department ids
// function viewDepartmentsMenu();

// build function to view ALL from the role table
//show job title, role id, department and salary
// function viewAllRolesMenu();

//build function to view ALL from the employee table
//show employee id, first name, last name, job title, department, salary and manager
// function viewAllEmployeesMenu();

//builkd function to ADD to the department table
//add department name and add it database
// function addDepartmentMenu();

//build function to ADD to the role tale
//add role name, salary and department for new entry and add it to database
// function addRoleMenu();

//build function to ADD to the employee table
//add first name, last name, role and manager for new entry and add to database
// function AddEmployeeMenu();

//build function to update the employee role
//select an employee and update with new role and add new info to the database
// function updateEmployeeRoleMenu();