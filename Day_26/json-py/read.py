import json

with open("data.json", "r") as file:
    loaded_data = json.load(file)

print(loaded_data)