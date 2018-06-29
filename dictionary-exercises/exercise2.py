ramit = { 
  'name': 'Ramit', 
  'email': 'ramit@gmail.com', 
  'interests': ['movies', 'tennis'], 
  'friends': [ 
     { 
       'name': 'Jasmine', 
       'email': 'jasmine@yahoo.com', 
       'interests': ['photography', 'tennis']
     }, 
     { 
        'name': 'Jan', 
        'email': 'jan@hotmail.com', 
        'interests': ['movies', 'tv'] 
     } 
    ] 
}

print(ramit['email'])
print(ramit['interests'][0])
print(ramit['friends'][0]['email'])
print(ramit['friends'][1]['interests'][1])


def letter_inword(word):
    histogram = {}

    for letter in word:
        if letter in histogram:
            histogram[letter] += 1
        else:
            histogram[letter] = 1
    print(histogram)

letter_inword('banana')

def word_histogram(word):
    histogram = {}
    white = ''

    for space in word:
        if space == ' ':
            if white in histogram:
                histogram[white] += 1
            else:
                histogram[white] = 1
                
            white = ''
        else: 
            white += space
    

            

    print(histogram)
word_histogram('to be or not to be ')