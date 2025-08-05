import datetime

history = []  # list to store calculation history


print("🧮 Welcome to Simple Python Calculator!")
print("Current Time:", datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"))


while True:
    print("\nSelect an operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. View History")
    print("6. Exit")

    choice = input("Enter choice (1-6): ")

    if choice in ["1", "2", "3", "4"]:
      
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        
        if choice == "1":
            result = num1 + num2
            operation = "Addition"
        elif choice == "2":
            result = num1 - num2
            operation = "Subtraction"
        elif choice == "3":
            result = num1 * num2
            operation = "Multiplication"
        elif choice == "4":
            if num2 == 0:
                print("Error: Cannot divide by zero.")
                continue
            result = num1 / num2
            operation = "Division"

        print(f"{operation} Result: {result}")

       
        timestamp = datetime.datetime.now().strftime("%H:%M:%S")
        history.append(f"[{timestamp}] {operation} of {num1} and {num2} = {result}")

    elif choice == "5":
        print("\n📜 Calculation History:")
        if not history:
            print("No calculations yet.")
        else:
            for record in history:
                print(record)

    elif choice == "6":
        print("Thanks for using the calculator. Goodbye!")
        break

    else:
        print("Invalid choice. Please try again.")
