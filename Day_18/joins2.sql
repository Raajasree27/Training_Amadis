select * from notes;
select * from manufacturer;
insert into manufacturer(name,country)values(NULL,NULL);
insert into manufacturer(name,country)values('Country Z',NULL);
insert into manufacturer(name,country)values(NULL,'India');


select n.title,m.name,m.country from notes n join manufacturer m on n.manufacturer_id = m.manufacturer_id;

select n.title,m.name,m.country from notes n inner join manufacturer m on n.manufacturer_id = m.manufacturer_id;

select n.title,m.name,m.country from notes n right join manufacturer m on n.manufacturer_id = m.manufacturer_id;

select n.title,m.name,m.country from notes n  left join manufacturer m on n.manufacturer_id = m.manufacturer_id;

SELECT COALESCE(manufacturer_id,note_id ) AS display_name FROM notes; --Fallback

SELECT name,country,
       COALESCE(name,country, 'No phone') AS m_data   --Multiple fallback, not updating.
FROM manufacturer;

SELECT name,country,
       COALESCE(country,name, 'No phone') AS m_data   --Multiple fallback, not updating.
FROM manufacturer;




































