import json
import os

filename = "users.json"

# Initial data
initial_data = [
    {"name": "Raaja", "age": 21},
    {"name": "varsha", "age": 22}
]

if not os.path.exists(filename):
    with open(filename, "w") as file:
        json.dump(initial_data, file, indent=4)
    print(" File created with initial data.")

with open(filename, "r") as file:
    users = json.load(file)

print("\n Current Users:")
for user in users:
    print(f"- {user['name']} (age {user['age']})")


print("\n Add a New User:")
new_name = input("Enter name: ")
new_age = input("Enter age: ")


if new_name.strip() and new_age.isdigit():
    new_user = {"name": new_name, "age": int(new_age)}
    users.append(new_user)

    
    with open(filename, "w") as file:
        json.dump(users, file, indent=4)

    print(f"\n '{new_name}' added successfully!")
else:
    print("Invalid input. Name must not be empty and age must be a number.")
