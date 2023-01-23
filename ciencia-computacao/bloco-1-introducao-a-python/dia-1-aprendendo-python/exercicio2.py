numbers = [4,5,6]

def mean(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)