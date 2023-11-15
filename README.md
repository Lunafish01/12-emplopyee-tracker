# 12-emplopyee-tracker

## Table of Contents

* [User Story](#user-story)
* [Acceptance Criteria](#acceptance-criteria)
* [Installation](#installation)
* [Usage](#usage)
* [Struggles](#struggles)
* [Screenshot and other media](#screenshot-and-other-media)

## User Story

* AS A business owner
* I WANT to be able to view and manage the departments, roles, and employees in my company
* SO THAT I can organize and plan my business

## Acceptance Criteria

* GIVEN a command-line application that accepts user input
* WHEN I start the application
* THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
* WHEN I choose to view all departments
* THEN I am presented with a formatted table showing department names and department ids
* WHEN I choose to view all roles
* THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
* WHEN I choose to view all employees
* THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
* WHEN I choose to add a department
* THEN I am prompted to enter the name of the department and that department is added to the database
* WHEN I choose to add a role
* THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
* WHEN I choose to add an employee
* THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
* WHEN I choose to update an employee role
* THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation

Installed the following dependencies:
- inquirer v.8.2.4
- mysql2

## Usage

This application can be used to track various information about the employees of a given workplace. Using the application you can track employee first and last name, salary, specific role and ID, as well as their department and what manager personnel the searched employee reports to.

## Struggles
- I was not able to properly get the functions to work in inquirer. WHen the menu select init function is run, you are able to see the first options to select but cannot move past that start menu section.
- I'm also not able to get my employee table to generate in the schema.sql file. No matter what I do to chage the syntax and what corrections I try the table will not populate in the mysql environment. 
- I will continue to try to work on this project after submission to attempt to fix the issues I'm running into.

## Screenshot and other media