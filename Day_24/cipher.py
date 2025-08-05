import time

def shift_text(text):
    start = time.time()

    char_list = list(text)
    result = ""

    for char in char_list:
        if char.isalpha():
            base = ord('A') if char.isupper() else ord('a')
            shifted = chr((ord(char) - base + 4) % 26 + base)
            result += shifted
        else:
            result += char

    end = time.time()
    print("Shifted Text:", result)
    print("Time taken (in seconds):", round(end - start, 5))


shift_text("Apple pie")