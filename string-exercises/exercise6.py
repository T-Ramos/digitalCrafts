myLetter = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z')

cypher = 'lbh zhfg hayrnea jung lbh unir yrnearq'
position = 0
newPosition = 0

for n in cypher:
    if n.isspace() == False :
        position = myLetter.index(n)
        newPosition = position - 13
        if newPosition < 0:
            newPosition = 25 + newPosition
        print(myLetter[newPosition])
