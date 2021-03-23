CREATE DATABASE employee_trackerDB;

Use employee_trackerDB;

CREATE TABLE department(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL

);

CREATE TABLE role(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

CREATE TABLE employee(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NOT NULL,
    manager_id INT
);




/*second database*/
/* DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

Use employee_trackerDB;

CREATE TABLE department(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);
-- DROP TABLE IF EXISTS employee;
CREATE TABLE employee(
	employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT
);
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Jones", 1, NULL);

SELECT employee_id, first_name, 
role, manager_id AS manager 
FROM employee 
JOIN role ON employee.role_id = role.role_id 
ORDER BY last_name; */


-- third database
/* DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

Use employee_trackerDB;

CREATE TABLE department(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
	id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)
);

CREATE TABLE employee(
	employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES manager(id),
    PRIMARY KEY (id)
); */





/* DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

Use employee_trackerDB;

CREATE TABLE department(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
	id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (id) REFERENCES role(role_id)
);  */




/* DROP DATABASE IF EXISTS employee_trackerDB;

CREATE DATABASE employee_trackerDB;

Use employee_trackerDB;

CREATE TABLE department(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role(
	role_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
	id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
	FOREIGN KEY (role_id) REFERENCES role (role_id),
	FOREIGN KEY (manager_id) REFERENCES employee (id) 

); */