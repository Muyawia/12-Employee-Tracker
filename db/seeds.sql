INSERT INTO department 
(department_name)
VALUES ("Customer Outreach"),
       ("Marketing Executive");

  
INSERT INTO employee_role 
(job_role, salary, department_id)
VALUES ("Creative Director", 100000,1),
       ("Customer Relations", 200000,2);

       

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)     
VALUES ("Mohammed", "Ali", 1, NULL),
       ("Eren", "Yaeger", 2, NULL),
       ("Armin", "Arlert", 3, NULL);