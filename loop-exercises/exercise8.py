height = int(input('What is the height? '))

x = 1
while (height > 0):
    print((' ' * height) + ('*' * x))
    x += 2
    height -= 1