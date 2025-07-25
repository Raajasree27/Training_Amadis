CREATE TABLE sales (
    id INT PRIMARY KEY,
    category VARCHAR(50),
    amount DECIMAL(10, 2)
);
INSERT INTO sales (id, category, amount) VALUES
(1, 'Electronics', 120.50),
(2, 'Electronics', 300.00),
(3, 'Clothing', 75.00),
(4, 'Clothing', 50.00),
(5, 'Grocery', 25.00),
(6, 'Grocery', 40.00),
(7, 'Electronics', 150.00),
(8, 'Clothing', 100.00),
(9, 'Grocery', 60.00),
(10, 'Electronics', 80.00);

--Total sales
select category, count(*) as total_sales from sales group by category;

--Total sales amount
select category, sum(amount) as total_sales from sales group by category;

--Average sales of electroincs
select avg(amount) as total_sales_Elec from sales where category='Electronics'

--Highest sales in each category
select category, Max(amount) as max_sales from sales group by category;

--Amount > 100	
select  count(*) as total_sales from sales where amount>100;



















