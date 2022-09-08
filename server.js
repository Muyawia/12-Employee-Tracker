const {mysqlConnection, seeAllDepartments, seeAllRoles, seeAllEmployees, makeDepartment, makeRole, makeEmployee, newEmployeeRole} = require('./lib/menuSelectors.js');
const inquirer = require("inquirer");

mysqlConnection()
function app() {

    const roles = [];
    const departments = [];
    const employees = [];

    inquirer
        .prompt([
            {
                name:"start",
                type: "list",
                message:"Please select an option...",
                choices:[
                    "See all Roles", 
                    "See all Departments", 
                    "See all Employees", 
                    "Add a new Role", 
                    "Add a new Department", 
                    "Add a new Employee", 
                    "Update an Employee", 
                    "Finish",
                ],
            },
        ])
        .then((answers) => {
            if (answers.menu == "See all Roles"){
                seeAllRoles()
                app()
            }

            if (answers.menu == "See all Departments"){        
                seeAllDepartments()
                app()
            }

            if (answers.menu == "See all Employees"){
                seeAllEmployees()    
                app()
            }

            if (answers.menu == "Add a new Role"){
                showDepartments()
                addRoleReply()
            }

            if (answers.menu == "Add a new Department"){       
                addDepartmentReply()
                renderAllDepartments()
                addRoleReply()
            }

            if (answers.menu == "Add a new Employee"){
                renderEmployees()
                renderRoles()
                addEmployeeReply()
            }

            if (answers.menu == "Update an Employee"){
                renderEmployees()
                renderRoles()
                newEmployee() 
            }

            if (answer.menu == "Finish"){
                process.exit();
            }

        })

        var addRoleReply = () => {
            inquirer
            .prompt([

            ])
            .then ((answers) => {

            })

        }

        var addEmployeeReply = () => {
            inquirer
            .prompt([

            ])
            .then ((answers) => {
                
            })


        }

        var addDepartmentReply = () => {
            inquirer
            .prompt([

            ])
            .then ((answers) => {
                
            })
        var showDepartments = () => {

        }


    }
}

app();