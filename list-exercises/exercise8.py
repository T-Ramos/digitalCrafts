num1 = [1, 2, 3]
num2 = [4, 5, 6]
num3 = []

for index in range(0, len(num1), 1):
    num3.append(num1[index] * num2[index])


print(num3)