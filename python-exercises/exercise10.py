count = 0
print('You have ' + str(count) + ' coins.')

coins = 'yes'

while coins == 'yes':
    
    coins = input('Do you want another? ')    
    if (coins == 'yes'):
        count = count + 1
        print('You have ' + str(count) + ' coins.')

    elif (coins == 'no'):
        print('bye')
    
    