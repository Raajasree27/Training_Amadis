import datetime


student_name = "Alice"
marks = [85, 78, 92, 70, 88]  
total = sum(marks)            
average = total / len(marks)

# --- Date ---
today = datetime.date.today()


print("Date:", today)
print("Student Name:", student_name)
print("Marks:", marks)
print("Average:", average)


if average >= 90:
    grade = "A"
elif average >= 80:
    grade = "B"
elif average >= 70:
    grade = "C"
else:
    grade = "D"

print("Grade:", grade)


print("\nSubject-wise Result:")
for i, mark in enumerate(marks, start=1):
    result = "Pass" if mark >= 40 else "Fail"  # conditional inside loop
    print(f"Subject {i}: {mark} - {result}")
