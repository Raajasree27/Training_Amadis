numbers = [10, 20, 30, 40, 50]

print(numbers)

numbers.append(60)
print(numbers)

numbers.insert(2, 25)
print(numbers)

numbers.remove(40)
print(numbers)

popped = numbers.pop()
print(popped)
print(numbers)

numbers[1] = 22
print(numbers)

length = len(numbers)
print(length)

sliced = numbers[1:4]
print(sliced)

numbers.reverse()
print(numbers)

numbers.sort()
print(numbers)


fruits = ["apple", "banana", "cherry", "apple", "date"]

for fruit in fruits:
    print(fruit)

uppercase_fruits = [fruit.upper() for fruit in fruits]
print(uppercase_fruits)

a = [1, 2, 3]
b = [4, 5]
a.extend(b)
print(a)

count_apples = fruits.count("apple")
print(count_apples)

index_cherry = fruits.index("cherry")
print(index_cherry)

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix[0])
print(matrix[1][2])


colors = ["red", "green", "blue"]

for index, color in enumerate(colors):
    print(index, color)

names = ["Alice", "Bob", "Charlie"]
scores = [85, 90, 95]

combined = list(zip(names, scores))
print(combined)

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = [n for n in numbers if n % 2 == 0]
print(even_numbers)

squares = list(map(lambda x: x * x, numbers))
print(squares)

original = [10, 20, 30]
copy1 = original
copy2 = original[:]

copy1[0] = 99
print(original)
print(copy2)
