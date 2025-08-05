secret_number = 7
guess = None
attempts = 0

while guess != secret_number:
    guess = int(input("Guess the number (between 1 and 10): "))
    attempts += 1

    if guess < secret_number:
        print("Too low! Try again.")
    elif guess > secret_number:
        print("Too high! Try again.")

print(f" Correct! You guessed it in {attempts} tries.")
