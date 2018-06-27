word = input('Type in message: ')

vowel = word
vowels = ('a', 'e', 'i', 'o', 'u')

for n in word:
    if n == vowels[0]:
        vowel = vowel.replace('a', 'aaaaa')
    elif n == vowels[1]:
        vowel = vowel.replace('e', 'eeeee')
    elif n == vowels[2] :
        vowel = vowel.replace('i', 'iiiii')
    elif n == vowels[3] :
        vowel = vowel.replace('o', 'ooooo')
    elif n == vowels[4] :  
        vowel = vowel.replace('u', 'uuuuu')


print('Replaced: ', vowel)
