# In this simple RPG game, the hero fights the goblin. He has the options to:

# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee
import random

class Character:
    def __init__(self, health, power, bounty, name):
        self.health = health 
        self.power = power
        self.bounty = bounty
        self.name = name 
    def attack(self, enemy):
        enemy.health -= self.power
        print("{} does {} damage to the {}. ".format(self.name, self.power, enemy.name))
        if self.health <= 0:
            print(self.name + ' are dead.')
        elif enemy.health <= 0:
            print(self.name + ' is dead.')
    def alive(self):
        if self.health > 0:
            return True
        else:
            return False
    def print_status(self):
        print("{} has {} health and {} power.".format(self.name, self.health, self.power))
    





class Hero(Character):
    def __init__(self, health, power, armor, bounty, evade, name):
        super().__init__(health, power, bounty, name)
        self.armor = armor
        self.evade = evade 
    def attack(self, enemy):
        crit = random.randint(1, 10)
        if crit == 2 or crit == 3:
            self.power = (self.power * 2)
        enemy.health -= self.power
        print('{} does {} damage to the {}. '.format(self.name, self.power, enemy.name))
        if self.health <= 0:
            print(self.name + ' are dead.')
        elif enemy.health <= 0:
            print(enemy.name + ' is dead.')
        if self.armor > 0:
            (self.armor + self.health) - enemy.power
            print('{} and {} got hit by {}'.format(self.armor, self.health, enemy.power))
        if self.evade == 2:
            if random.randint(0, 100) < 10:
                print('Evaded')
        if self.evade == 4:
            if random.randint(0, 100) < 50:
                print('Evaded')
        

class Goblin(Character):
    def __init__(self, health, power, bounty, name):
        super().__init__(health, power, bounty, name)

class Medic(Character):
    def __init__(self, health, power, bounty, name):
        super().__init__(health, power, bounty, name)
    def attack(self, enemy):
        regen = random.randint(1, 10)
        self.health -= enemy.power
        print('{} does {} to the {}. '.format(enemy.name, enemy.power, self.name))
        if regen == 1 or regen == 2:
            self.health = self.health + 2
            print('Lucky! {} health increased by 2! '.format(self.name))

class Shadow(Character):
    def __init__(self, health, power, bounty, name):
        super().__init__(health, power, bounty, name)
    def attack(self, enemy):
        dmg = random.randint(1, 10)
        if dmg == 5:
            self.health -= enemy.power
            print('{} does {} to {}. '.format(enemy.name, enemy.power, self.name))
        else:
            print('{} dodged! '.format(self.name))

class Zombie(Character):
    def __init__(self, health, power, bounty, name):
        super().__init__(health, power, bounty, name)
    def alive(self):
        if self.health == 0:
            return True
        elif self.health > 0:
            return True
        elif self.health < 0:
            return True

class Tank(Character):
    def __init__(self, health, power, bounty, name):
        super().__init__(health, power, bounty, name)

class Wizard(Character):
    def __init__(self, health, power, bounty, name):
        super().__init__(health, power, bounty, name)

class Store:
    def __init__(self, Hero):
        items = [tonic, armor, evade]

    def tonic(self, Hero):
        cost = 3
        name = 'SuperTonic'
        hero.health += 2
        print('{} health increased to {}'.format(Hero.name, Hero.health))

    def armor(self, Hero):
        cost = 4
        name = 'Armor'
        hero.armor += 2
        print('{} armor increased to {}'.format(Hero.name, Hero.armor))

    def evade(self, Hero):
        cost = 2
        name = 'Evade'
        hero.evade += 2
        print('{} evade increased to {}'.format(Hero.name, Hero.evade))

        


    
def main():
    hero = Hero(10, 5, 0, 0, 0, 'Hero')
    goblin = Goblin(6, 2, 4, 'Goblin')
    medic = Medic(7, 1, 0, 'Medic')
    tank = Tank(15, 3, 0, 'Tank')
    wizard = Wizard(4, 11, 10, 'Wizard')
    shadow = Shadow(1, 8, 0, 'Shadow')
    zombie = Zombie(0, 3, 6, 'Zombie')

    while goblin.alive() and hero.alive():
        hero.print_status()
        goblin.print_status()
        print()
        print("What do you want to do?")
        print("1. fight goblin")
        print("2. do nothing")
        print("3. flee")
        print("> ", end=' ')
        raw_input = input()
        if raw_input == "1":
            # Hero attacks goblin
            hero.attack(goblin)
        elif raw_input == "2":
            pass
        elif raw_input == "3":
            print("Goodbye.")
            break
        else:
            print("Invalid input {}".format(raw_input))

        if goblin.health > 0:
            # Goblin attacks hero
            goblin.attack(hero)


main ()