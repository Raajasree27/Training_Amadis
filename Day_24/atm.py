import datetime

user_name = "John"
balance = 5000.0  
pin_code = "2027"


today = datetime.datetime.now()
print("Welcome to Python Bank!")
print("Date & Time:", today.strftime("%Y-%m-%d %H:%M:%S"))


entered_pin = input("Enter your 4-digit PIN: ")

if entered_pin == pin_code:
    print(f"\nWelcome, {user_name}!")
    
   
    while True:
        print("\nChoose an option:")
        print("1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Enter choice (1-4): ")
        
        if choice == "1":
            print(f"Your balance is: ₹{balance:.2f}")
        
        elif choice == "2":
            amount = float(input("Enter amount to deposit: ₹"))
            balance += amount
            print(f"Deposited ₹{amount}. New balance: ₹{balance:.2f}")
        
        elif choice == "3":
            amount = float(input("Enter amount to withdraw: ₹"))
            if amount <= balance:
                balance -= amount 
                print(f"Withdrew ₹{amount}. New balance: ₹{balance:.2f}")
            else:
                print("Insufficient balance.")
        
        elif choice == "4":
            print("Thank you for using Python Bank. Goodbye!")
            break 
        
        else:
            print("Invalid choice. Try again.")

else:
    print("Incorrect PIN. Access denied.")
