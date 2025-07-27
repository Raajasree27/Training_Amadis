CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(50),
    DepartmentID INT
);

INSERT INTO Employees (EmployeeID, Name, DepartmentID) VALUES
(1, 'Alice', 10),
(2, 'Bob', 20),
(3, 'Charlie', 10),
(4, 'Diana', 30),
(5, 'Evan', NULL);

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

INSERT INTO Departments (DepartmentID, DepartmentName) VALUES
(10, 'HR'),
(20, 'IT'),
(30, 'Sales'),
(40, 'Marketing');

CREATE TABLE Salaries (
    EmployeeID INT,
    Salary INT
);

INSERT INTO Salaries (EmployeeID, Salary) VALUES
(1, 60000),
(2, 75000),
(3, 58000),
(4, 72000),
(6, 50000);
select * from Employees;
select * from departments;
select * from salaries;

--Inner Join
select e.departmentId,e.name,d.departmentName from employees e inner join departments d on e.departmentId=d.departmentid;

--Left Join
select e.departmentId,e.name,coalesce(d.departmentName,'No department')from employees e left join departments d on e.departmentId=d.departmentid;

--Right Join
select e.departmentId,d.departmentName,coalesce(e.name,'No person')from employees e right join departments d on e.departmentId=d.departmentid;

--full join
select e.departmentId,coalesce(d.departmentName,'Not specified'),coalesce(e.name,'Not defined') from employees e full join departments d on e.departmentId=d.departmentid;

--practise_1
select e.employeeId,e.name,s.salary from Employees e inner join Salaries s on e.employeeId = s.employeeId;

--practise_2
select e.name from employees e  where departmentId isNULL;

--practise_3
select e.name,s.salary from employees e right join salaries s on e.employeeid=s.employeeid where e.employeeId isnull;















































