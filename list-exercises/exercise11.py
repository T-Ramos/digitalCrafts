A = [1, 1, 3, 4]
B = []

for number in A:
    if number not in B:
        B.append(number)

print(B)