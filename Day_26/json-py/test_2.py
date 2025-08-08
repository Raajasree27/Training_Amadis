# json.loads() deserializes a JSON string into a Python object. converts the json string to python object

import json

json_string = '{"name": "Alice", "age": 25, "is_student": false}'
python_obj = json.loads(json_string)

print(python_obj)
print(python_obj["name"])


# | JSON         | Python         |
# | ------------ | -------------- |
# | `object`     | `dict`         |
# | `array`      | `list`         |
# | `string`     | `str`          |
# | `number`     | `int`/`float`  |
# | `true/false` | `True`/`False` |
# | `null`       | `None`         |


json_string = '''
{
  "user": {
    "id": 101,
    "name": "Bob",
    "languages": ["Python", "Java"]
  }
}
'''

data = json.loads(json_string)
print(data["user"]["languages"][0])
