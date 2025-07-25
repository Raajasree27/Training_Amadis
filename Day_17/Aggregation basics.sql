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

select category, Min(amount) as total_sales from sales group by category;
select category, Max(amount) as total_sales from sales group by category;
select category, sum(amount) as total_sales from sales group by category;
select category, count(*) as total_sales from sales group by category;

select category, count(amount) as total_sales from sales group by category;

SELECT 
    category,
    COUNT(*) AS total_sales,
    SUM(amount) AS total_amount,
    MIN(amount) AS min_amount,
    MAX(amount) AS max_amount
FROM 
    sales
GROUP BY 
    category;

















