const express = require("express");

const mysqlConnection = () => {
    const mysql2 = require('mysql2');
    db = await mysql2.createConnection(
        {
            host:"localhost",
            user:"root",
            password:"abc123",
            database:"employee_tracker"
        },
        console.log("Connection to database established")
    );
}




module.exports = {mysqlConnection, seeAllDepartments, seeAllRoles, seeAllEmployees, makeDepartment, makeRole, makeEmployee, newEmployeeRole};