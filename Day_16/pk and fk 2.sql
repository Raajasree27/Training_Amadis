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

insert into enroll(stud_id,enroll_id)values (12,101),(100,102),(14,103),(13,104);

INSERT INTO enroll(stud_id,enroll_id) values(15,106);

alter table students add unique(name);

delete from students;

insert into students (name,email) values ('rajasa','raajasori@gmail.com');


select * from enroll;

select * from students;


select s.user_id,s.name,s.email ,e.stud_id,e.enroll_id from students s join enroll e on s.user_id=e.stud_id;
