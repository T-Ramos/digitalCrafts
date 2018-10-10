print('---Step 1!---')

print('Hello! What is your name?')
myName = input()

print('Hello ' + myName + '! I am thinking of a number between 1 and 10. What\'s the number? :) ')

secret_number = 5
guess = int(input())

while guess != secret_number:
    guess = int(input('Nope, try again! :)'))
if guess == secret_number:
    print('Yes! You win!')


print('---Step 2---')

print('Hello! What is your name?')
myName = input()

print('Hello ' + myName + '! I am thinking of a number between 1 and 10. What\'s the number? ')

secret_number = 5
guess = int(input())

while guess != secret_number:
    if guess < secret_number:
         guess = int(input(str(guess) + ' is too low. What\'s the number? '))
    elif guess > secret_number:
        guess = int(input(str(guess) + ' is too high. What\'s the number? ' ))
if guess == secret_number:
    print('Yes! You win!')


print('---Step 3---')

print('Hello! What is your name?')
myName = input()

print('Hello ' + myName + '! I am thinking of a number between 1 and 10. What\'s the number? ')

import random
secret_number = random.randint(1, 10)
guess = int(input())

while guess != secret_number:
    if guess < secret_number:
         guess = int(input(str(guess) + ' is too low. What\'s the number? '))
    elif guess > secret_number:
        guess = int(input(str(guess) + ' is too high. What\'s the number? ' ))
if guess == secret_number:
    print('Yes! You win!')
    
print('---Step 4---')

print('Hello! What is your name?')
myName = input()

print('Hello ' + myName + '! I am thinking of a number between 1 and 10. You have 5 guesses left. What\'s the number? ')

guess_count = 5
import random
secret_number = random.randint(1, 10)
guess = int(input())

while guess != secret_number:
    if guess_count > 1:
        if guess < secret_number:
            guess_count -= 1
            guess = int(input(str(guess) + ' is too low. You have ' + str(guess_count) + ' guesses left. What\'s the number? '))
        elif guess > secret_number:
            guess_count -= 1
            guess = int(input(str(guess) + ' is too high. You have ' + str(guess_count) + ' guesses left. What\'s the number? ' ))
        elif guess_count < 1:
            print('You ran out of guesses!')
    else:
        if guess < secret_number:
            print(str(guess) + ' is too low. You ran out of guesses.')
            break
        elif guess > secret_number:
            print(str(guess) + ' is too high. You ran out of guesses.')
            break
if guess == secret_number:
    print('Yes! You win!')

print('---Bonus---')

# print('Hello! What is your name?')
# myName = input()

# print('Hello ' + myName + '! I am thinking of a number between 1 and 10. You have 5 guesses left. What\'s the number? ')
answer = input('Do you want to play again? Yes or No? ')
guess_count = 5
import random
secret_number = random.randint(1, 10)
guess = int(input('Guess a number '))

while guess != secret_number:
    if answer == 'Yes':
        if guess_count > 1:
            if guess < secret_number:
                guess_count -= 1
                guess = int(input(str(guess) + ' is too low. You have ' + str(guess_count) + ' guesses left. What\'s the number? '))
            elif guess > secret_number:
                guess_count -= 1
                guess = int(input(str(guess) + ' is too high. You have ' + str(guess_count) + ' guesses left. What\'s the number? ' ))
            elif guess_count < 1:
                print('You ran out of guesses!')
        else:
            if guess < secret_number:
                print(str(guess) + ' is too low. You ran out of guesses.')
                break
            elif guess > secret_number:
                print(str(guess) + ' is too high. You ran out of guesses.')
                break
    else:
        print('bye')
        break
if guess == secret_number:
    print('Yes! You won!')

