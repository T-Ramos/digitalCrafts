number = int(input('\nPlease enter the range number: '))

next = 0
i = 0
First_Value = 0
Second_Value = 1
sums = 0
while(next < number):
    if i <= 1:
        next = 1
    else:
        next = First_Value + Second_Value
        First_Value = Second_Value
        Second_Value = next
    i = i + 1
    
    if next % 2 == 0:
        sums += next
print(sums)