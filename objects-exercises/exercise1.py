class Person: 
    def __init__(self, name, email, phone): 
     self.name = name 
     self.email = email 
     self.phone = phone 
     self.friends = []
     self.greeting_count = 0
     print("{}, {}, {}".format(self.name, self.email, self.phone))

     
    def greet(self, other_person): 
        print('Hello {}, I am {}!'.format(other_person, self.name))
        self.greeting_count += 1

    def print_contact_info(self):
         print(self.name + "'s email: " + self.email + ' ' + self.name + "'s phone number: " + self.phone)
    
    def add_friend(self, friends):
        self.friends.append(friends.name)
    
    def num_friends(self):
        print(len(Jordan.friends))
    
    def __str__(self):
        return 'Person: {}, {}, {}'.format(self.name, self.email, self.phone)
    

Sonny = Person('Sonny', 'sonny@hotmail.com', '483-485-4948')
Jordan = Person('Jordan', 'jordan@hotmail.com', '495-586-3456')

print(Sonny.greeting_count)
Sonny.greet('Jordan')
print(Sonny.greeting_count)
Sonny.greet('Jordan')
print(Sonny.greeting_count)
Jordan.greet('Sonny')

Sonny.print_contact_info()

Jordan.add_friend(Sonny)

Jordan.num_friends()

print(str(Jordan))