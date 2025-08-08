# person = ("Alice", 30, "New York")
# print(person[0])
# print(person[1])
# print(person[-1])

# name, age, city = person
# print(name)
# print(age)
# print(city)

# print("Alice" in person)
# print(len(person))

# nested = (1, 2, (3, 4, 5))
# print(nested[2])
# print(nested[2][1])


# def min_max(numbers):
#     return min(numbers), max(numbers)

# result = min_max([5, 10, 3, 8])
# print(result)
# print(result[0])
# print(result[1])

# locations = {
#     (40.7128, -74.0060): "New York",
#     (34.0522, -118.2437): "Los Angeles"
# }
# print(locations[(40.7128, -74.0060)])

# names = ("Alice", "Bob", "Charlie")
# for index, name in enumerate(names):
#     print(index, name)

# scores = (85, 90, 95)
# paired = list(zip(names, scores))
# print(paired)

# list_from_tuple = list(scores)
# tuple_from_list = tuple(list_from_tuple)
# print(list_from_tuple)
# print(tuple_from_list)


# a = (1, 2, [3, 4])
# a[2][0] = 99
# print(a)

# tuple_set = {(1, 2), (3, 4), (5, 6)}
# print((3, 4) in tuple_set)

# Invalid: unhashable type
# set_with_list = {[1, 2]}  # Uncomment to see the error

students = [("Alice", 85), ("Bob", 90), ("Charlie", 80)]
students.sort(key=lambda x: x[1], reverse=True)
print(students)

data = [("a", 1), ("b", 2), ("c", 3)]
for letter, number in data:
    print(letter, number)

nested = (("x", (1, 2)), ("y", (3, 4)))
for outer, (inner1, inner2) in nested:
    print(outer, inner1, inner2)
