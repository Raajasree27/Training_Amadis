students = [
    ("Alice", [85, 90, 78]),
    ("Bob", [75, 80, 72]),
    ("Charlie", [95, 100, 98])
]

student_dict = {}

for name, scores in students:
    average = sum(scores) / len(scores)
    student_dict[name] = {
        "scores": scores,
        "average": average,
        "passed": average >= 80
    }

for student, info in student_dict.items():
    print(student)
    print(" Scores:", info["scores"])
    print(" Average:", info["average"])
    print(" Passed:", info["passed"])
    print()
