answer = input('Do you want to play again (Y or N)? ')

def question(answer):
    if answer == 'Y':
        return True
    elif answer == 'N':
        return False
    else:
        print('Invalid input.')
        answer = input('Do you want to play again (Y or N)? ')
        question(answer)

question(answer)


