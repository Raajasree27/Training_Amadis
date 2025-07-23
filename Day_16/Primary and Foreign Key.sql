create table users(	
	user_id Serial primary key,
	name varchar(20)
);
Insert into users(name) values ('Ram'),('Sham'),('Raaja'),('Sree');
select * from users;

create table enroll(
	userid int,
	enroll_id serial primary key,
	course_id int,
	foreign key(userid) references users(user_id)
	);
INSERT INTO enroll (userid, course_id) VALUES 
(1, 101), 
(2, 102), 
(3, 103), 
(4, 104);

select u.user_id,u.name, e.enroll_id,e.course_id from users u join enroll e on u.user_id =e.userid;

WITH r_users AS (
  SELECT * FROM users WHERE name LIKE '%s'
)
SELECT * FROM r_users;


