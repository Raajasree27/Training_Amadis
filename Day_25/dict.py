person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person["name"])
print(person["age"])

person["age"] = 31
print(person)

person["email"] = "alice@example.com"
print(person)

del person["city"]
print(person)

print("email" in person)
print(len(person))

student = {
    "name": "Bob",
    "grade": "A",
    "age": 20
}

for key in student:
    print(key, student[key])

for value in student.values():
    print(value)

for key, value in student.items():
    print(key, "->", value)

print(student.get("grade"))
print(student.get("email", "Not provided"))

extra_info = {
    "email": "bob@example.com",
    "age": 21
}
student.update(extra_info)
print(student)

copy_student = student.copy()
print(copy_student)

student.clear()
print(student)

employees = {
    "emp1": {"name": "Alice", "age": 30},
    "emp2": {"name": "Bob", "age": 25}
}
print(employees["emp1"]["name"])
print(employees["emp2"]["age"])

numbers = [1, 2, 3, 4]
squares = {x: x * x for x in numbers}
print(squares)

data = {
    "fruits": ["apple", "banana", "cherry"],
    "colors": ("red", "green", "blue")
}
print(data["fruits"][1])
print(data["colors"][2])

print(employees.get("emp3", {"name": "Unknown", "age": 0}))

keys = ["a", "b", "c"]
values = [1, 2, 3]
combined = dict(zip(keys, values))
print(combined)
