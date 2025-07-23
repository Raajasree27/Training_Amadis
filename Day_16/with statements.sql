create table students(
	user_id serial primary key,
	name varchar(15) notnull,
	email varchar(100) notnull
);


create table enroll(
	stud_id int primary Key,
	enroll_id int,
	foreign key (stud_id) references students(user_id)
)

with in_id as(
	select name,user_id from students where name like 'raj%'
)
select * from in_id

UPDATE students SET name = 'Raja' WHERE user_id = 13 RETURNING *; --return instantly without select.


WITH new_student AS (
  INSERT INTO students (name, email)
  VALUES ('sammos', 'samoj@example.com')
  
) select 'Insert Done'

with new_course as(
Insert into students(name,email) values('sindhus','sindhu@mail.com') returning user_id
)
insert into enroll(stud_id,enroll_id) select user_id,108 from new_course;




with new_st as(insert into students(name,email) values('rakshsa','raks@gmail.com') returning user_id,name),inserting_enroll as
(insert into enroll (stud_id,enroll_id) select user_id,110 from new_st returning stud_id)
select * from new_st;


























