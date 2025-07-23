CREATE TABLE student (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    date_of_birth DATE,
    gender VARCHAR(10),
    phone_number VARCHAR(15)
);

INSERT INTO student (student_id, first_name, last_name, date_of_birth, gender, phone_number) VALUES 
(1, 'Alice', 'Smith', '2000-05-15', 'Female', '1234567890'),
(2, 'Bob', 'Johnson', '1999-08-22', 'Male', '1234567891'),
(3, 'Charlie', 'Brown', '2001-03-10', 'Male', '1234567892'),
(4, 'Diana', 'Wilson', '2000-12-01', 'Female', '1234567893'),
(5, 'Ethan', 'Taylor', '1998-07-07', 'Male', '1234567894'),
(6, 'Fiona', 'Anderson', '2002-01-17', 'Female', '1234567895'),
(7, 'George', 'Thomas', '1999-09-25', 'Male', '1234567896'),
(8, 'Hannah', 'Moore', '2001-04-19', 'Female', '1234567897'),
(9, 'Ian', 'Martin', '1998-11-30', 'Male', '1234567898'),
(10, 'Julia', 'Lee', '2000-06-21', 'Female', '1234567899');

Select * from student;

Alter table student add mail varchar(100);

update student set mail='123@gmail.com' where first_name='Alice';

Alter table student drop column mail;

Alter table student rename column first_name to fname;
Alter table student rename column last_name to lname;

Alter table student alter column phone_number type varchar(12);

ALTER TABLE student ALTER COLUMN phone_number TYPE INT USING phone_number::integer;

select phone_number from student;







