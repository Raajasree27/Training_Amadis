students = [
    ("Alice", [True, True, False, True, True, True, False, True], [85, 90, 78]),
    ("Bob", [True, False, False, True, False, True, True, True], [55, 60, 58]),
    ("Charlie", [True, True, True, True, True, True, True, True], [95, 100, 98]),
    ("David", [False, True, True, True, False, True, False, False], [45, 50, 40]),
    ("Eve", [True, True, True, False, True, True, True, True], [70, 75, 80])
]

students_with_good_attendance = []
failing_but_good_attendance = []

for name, attendance, scores in students:
    total_classes = len(attendance)
    attended_classes = sum(attendance)
    attendance_percentage = (attended_classes / total_classes) * 100

    average_score = sum(scores) / len(scores)

    if attendance_percentage >= 75:
        students_with_good_attendance.append((name, attendance_percentage, average_score))
        if average_score < 60:
            failing_but_good_attendance.append(name)

print("Students with at least 75% attendance:")
for student, attendance_pct, avg_score in students_with_good_attendance:
    print(f"{student}: Attendance = {attendance_pct:.2f}%, Average Score = {avg_score:.2f}")

if students_with_good_attendance:
    avg_score_all = sum(s[2] for s in students_with_good_attendance) / len(students_with_good_attendance)
    print(f"\nAverage score of students with good attendance: {avg_score_all:.2f}")
else:
    print("\nNo students with attendance ≥ 75%")

print("\nStudents with good attendance but failing scores (<60):")
for student in failing_but_good_attendance:
    print(student)
