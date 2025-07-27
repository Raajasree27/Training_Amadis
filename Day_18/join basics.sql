CREATE TABLE table_a (
    id SERIAL PRIMARY KEY,name TEXT,age INTEGER
);

CREATE TABLE table_b (
    id SERIAL PRIMARY KEY,city TEXT,salary INTEGER
);
-- Insert into table_a
INSERT INTO table_a (name, age) VALUES (NULL, NULL),('Alice', 30),('Bob', NULL),(NULL, 25),('Charlie', NULL),(NULL, NULL),('David', 40),
(NULL, 35),('Eve', NULL),('Frank', 28);

-- Insert into table_b
INSERT INTO table_b (city, salary) VALUES (NULL, NULL),('New York', 70000),(NULL, 60000),('Chicago', NULL),(NULL, 80000),('San Francisco', NULL),
(NULL, NULL),('Miami', 55000),(NULL, 50000),('Dallas', NULL);

select * from table_a;
select * from table_b;


select a.name ,b.city,b.salary from table_a a full join table_b b on a.id=b.id;

delete from table_b where id='10';

select a.name, b.city,b.salary from table_a a left join table_b b on a.id=b.id;

select a.name, b.city,b.salary from table_a a right join table_b b on a.id=b.id;


select a.name, b.city,b.salary from table_a a inner join table_b b on a.id=b.id;


delete from table_b;






































