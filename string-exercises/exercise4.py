word = input('Please enter a word: ')

leetmsg = word
leetwords = 'aegiost'
for letter in word:
    if letter in leetwords:
        leetmsg = leetmsg.replace('a', str(4))
        leetmsg = leetmsg.replace('e', str(3))
        leetmsg = leetmsg.replace('g', str(6))
        leetmsg = leetmsg.replace('i', str(1))
        leetmsg = leetmsg.replace('o', str(0))
        leetmsg = leetmsg.replace('s', str(5))
        leetmsg = leetmsg.replace('t', str(7))

print('Translated message: ', leetmsg)

