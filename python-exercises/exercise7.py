bill = int(input('Total bill amount? '))
service = input('Level of Service? ')

if (service == 'good'):
    tip = bill * .20
elif (service == 'fair'):
    tip = bill * .15
elif (service == 'bad'):
    tip = bill * .10
else:
    tip = 0

print('Tip amount: $' + str("{:.2f}".format(tip)))

math = bill + tip
print('Total amount: $' + str("{:.2f}".format(math)))




