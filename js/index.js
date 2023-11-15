const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employee_db",
    password: "Montana1100$$",
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log("Connected to the employee_db database.");
});

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
            default: "View all employees",
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
                addEmployeeMenu();
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
function viewDepartmentsMenu() {
    db.query("SELECT * FROM department", function (err, data) {
        if(err) {
            console.log(err);
        }
        console.table(data);
        init();
    });
};

// build function to view ALL from the role table
//show job title, role id, department and salary
function viewAllRolesMenu() {
    db.query("SELECT * FROM role", function (err, data) {
        if (err) {
            console.log(err);
        }
        console.table(data);
        init();
    });
};

//build function to view ALL from the employee table
//show employee id, first name, last name, job title, department, salary and manager
function viewAllEmployeesMenu() {
    db.query("SELECT * FROM employee", function (err,data) {
        if (err) {
            console.log(err);
        }
        console.table(data);
        init();
    });
};

//build function to ADD to the department table
//add department name and add it to database
function addDepartmentMenu() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "newDepartment",
            message: "Enter name for new department"
        },
    ])
    .then((response) => {
        db.query( `INSERT INTO department (name) VALUES ("${response.newDepartment}")`,
        function (err, data) {
            if (err) {
                console.log(err);
            }
            console.log("Department added!");
            init();
        });
    });
}

//build function to ADD to the role tale
//add role name, salary and department for new entry and add it to database
function addRoleMenu() {
    inquirer
    .prompt([
        {
            type: "input",
            name: "newRole",
            message: "Add name for new role."
        },
        {
            type: "input",
            name: "salary",
            message: "Entered desired salary for this role."
        },
        {
            type: "list",
            name: "departmentId",
            message: "Enter department for new role",
            choices: [
                "Sales",
                "Engineering",
                "Finance",
                "Legal"
            ]
        }
    ])
    .then((response) => {
        db.query( `INSERT INTO role SET ?`, 
        {
            title: response.newRole,
            salary: response.salary,
            department_id: response.departmentId
        },
        (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Added role!");
            }
        }
        );
    });
};

//build function to ADD to the employee table
//add first name, last name, role and manager for new entry and add to database
function AddEmployeeMenu() {
    inquirer
    prompt([
        {
            type: "input",
            name: "firstName",
            message: "Enter first name of new employee."
        },
        {
            type: "input",
            name: "lastName",
            message: "Enter last name of new employee."
        },
        {
            type: "list",
            name: "roleId",
            message: "Enter new role fr new employee.",
            choices: [
                "Sales Lead",
                "Salesperso",
                "Lead Engineer",
                "Software Engineer",
                "Account Manager",
                "Accountant",
                "Legal Team Lead",
                "Lawyer"
            ]
        },
        {
            type: "list",
            name: "manager",
            message: "Select correct manager for new emplopyee.",
            choices: [
                "John Doe",
                "Ashley Rodriguez",
                "Kunal Singh",
                "Sarah Lourd"
            ]
        }
    ])
    .then((response) => {
        db.query(
            `INSERT INTO employee SET ?`,
            {
                first_name: response.firstName,
                last_name: response.lastName,
                role_id: response.roleId,
                manager_id: response.manager
            },
            (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Added new emplopyee!")
                    init();
                }
            }
        );
    });
};

//build function to update the employee role
//select an employee and update with new role and add new info to the database
function updateEmployeeRoleMenu() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Choose an employee to update.",
            choices: [
                "John Doe",
                "Mike Chan",
                "Ashley Rodriguez",
                "Kevin Tupik",
                "Kunal Singh",
                "Malia Brown",
                "Sarah Lourd",
                "Tom Allen"
            ]
        },
        {
            type: "list",
            name: "roleId",
            message: "Enter new role for new employee.",
            choices: [
                "Sales Lead",
                "Salesperson",
                "Lead Engineer",
                "Software Engineer",
                "Account Manager",
                "Accountant",
                "Legal Team Lead",
                "Lawyer"
            ]
        }
    ])
    .then ((response) => {
        db.query(`UPDATE employee SET role_id = ${response.roleId} WHERE id = ${response.employeeId}`,
            (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Updated employee role");
                    init();
                }
            }
        )
    });
};
init();