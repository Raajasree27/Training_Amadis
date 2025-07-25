create table customer(
	customer_id int primary key,
	name varchar(22),
	city varchar(50)
)


create table orders(
	order_id int primary key,
	customer_id int references customer(customer_id),
	amount decimal(10,2),
	order_date date
);

INSERT INTO customer (customer_id, name, city) VALUES
(1, 'Alice', 'New York'),
(2, 'Bob', 'Los Angeles'),
(3, 'Charlie', 'Chicago'),
(4, 'Diana', 'Houston'),
(5, 'Ethan', 'Phoenix');

INSERT INTO orders (order_id, customer_id, amount, order_date) VALUES
(101, 1, 120.50, '2025-07-01'),
(102, 1, 80.00,  '2025-07-05'),
(103, 2, 200.00, '2025-07-03'),
(104, 3, 150.75, '2025-07-10'),
(105, 4, 99.99,  '2025-07-12');

select * from customer;
select * from orders;


select o.order_date,c.customer_id,o.order_id,c.name,c.city,o.amount from customer c join orders o on o.customer_id=c.customer_id;


--Total amount spend by each customer
select c.name as c_name,sum(o.amount)as total_spent from orders o join customer c on o.customer_id=c.customer_id group by c.name;

--number of orders placed by each customer
select c.name as c_name, count(order_id) as total_order from orders o join customer c on o.customer_id =c.customer_id group by c.name;


--Average order amount for each customer
select c.name as c_name, avg(o.amount) as avg_order from orders o join customer c on o.customer_id=c.customer_id group by c.name;

--total revenue in each city
select c.city as c_city, sum(o.amount) as total_amount from orders o join customer c on o.customer_id = c.customer_id group by c.city;

--List customers who have placed more than one order
select c.name as c_name, count(o.order_id) as order_count from orders o join customer c on o.customer_id =c.customer_id  group by c.name having count(o.order_id)>1; 

--customer name with highest single order amount
select c.name as c_name, max(amount) as c_paid from orders o join customer c on o.customer_id = c.customer_id group by c.name;

--Total amount of orders and total amount paid by each customers
select c.name as c_name, count(o.amount) as total_amount,max(o.amount) as c_paid from orders o join customer c on o.customer_id=c.customer_id group by c.name;

--avg amount, order from customers
select c.city as c_name, count(o.order_id) as c_order,avg(o.amount) as avg_amount from orders o join customer c on o.customer_id=c.customer_id group by c.city;















