def getmenuchoice():
    print('Electronic Phone Book \n======================')
    print('1. Look up an entry')
    print('2. Set an entry')
    print('3. Delete an entry')
    print('4. List all entries')
    print('5. Quit')
    userchoice=input('What do you want to do?(1-5) ')
    return(userchoice)


directory = []
go = True
while go:
    def inputentry():
        entry = []
        n = input('Name: ')
        p = input('Phone Number: ')
        entry.append(n)
        entry.append(p)
        return entry
    ch = getmenuchoice()
    if ch == '2':
        e = inputentry()
        directory.append(e)
        print('Entry stored for ' + str(e))
    # if ch == '1':
    #     entries = getmatches(directory)
    #     print(entries)
    def getmatches(dirlist):
        name = input('Enter Name: ')
        results = []
        for e in dirlist:
            if name in e[0]:
                results.append(e)
                return results
    if ch == '1':
            entries = getmatches(directory)
            print(entries)
    def deletematch(dirlist):
        name = input('Enter Name: ')
        for e in dirlist:
            if name in directory:
                del name                
    if ch == '3':
        entries = deletematch(directory)
        print('Deleted entry for: ' + str(e))
    if ch == '4':
        print(str(directory))
    if ch == '5':
        print('Quit!')
        break