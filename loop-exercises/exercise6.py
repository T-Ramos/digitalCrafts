width = int(input('Width? '))
height = int(input('Height? '))

row = ''
side = '*'
i = 0
l = 0

while i < width:
    row += '*'
    i += 1

while l < (width - 2):
    side += ' '
    l += 1

side += '*'

print(row)
for n in range(height-2):
    print(side)
print(row)