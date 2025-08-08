# JSON is a syntax for storing and exchanging data.
# JSON is text, written with JavaScript object notation.

# TO import josn, we use
import json

# covert  python to json


data = {
    "name": "John",
    "age": 30,
    "is_student": False
}

json_string = json.dumps(data)
print(json_string)

# json - intend
print("With space and indendation")
print(json.dumps(data, indent=4))

# indent=None: JSON is printed as a compact single line.
# indent=0: Still multiline, but no actual spacing.
# indent=1, indent=2, indent=4, etc.: Controls the visual structure.


data_2 = {
    "name": "Alice",
    "age": 25,
    "skills": ["Python", "JavaScript"]
}
print("Without indentation")

json_string = json.dumps(data_2)
print(json_string)

print("with Indendation")
print(json.dumps(data_2, indent=4))


# sort_keys – Sort Dictionary Keys, Sorts the output JSON string alphabetically by dictionary keys.
print(json.dumps(data_2, sort_keys=True))

# separators – Customize Delimiters, By default, JSON uses (", ", ": "). 
print(json.dumps(data_2, separators=(",", "-")))

# skipkeys – Ignore Non-String Dictionary Keys, JSON requires dictionary keys to be strings. If skipkeys=True, it will skip keys like numbers or tuples instead of raising an error.
data = {("x", "y"): "value", "name": "Alice"}

print(json.dumps(data, skipkeys=True))

# to make this work
stringified_data = {str(k): v for k, v in data.items()}
print(json.dumps(stringified_data, indent=2))