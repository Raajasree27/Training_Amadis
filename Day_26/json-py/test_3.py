# Writing json file

import json

data = {
    "name": "Alice",
    "age": 25,
    "is_student": False
}

with open("data.json", "w") as file:
    json.dump(data, file, indent=4)
