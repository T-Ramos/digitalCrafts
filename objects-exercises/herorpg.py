# In this simple RPG game, the hero fights the goblin. He has the options to:

# 1. fight goblin
# 2. do nothing - in which case the goblin will attack him anyway
# 3. flee
import random

class Character:
    def __init__(self, health, power):
        self.health = health 
        self.power = power
    def attack(self, enemy):
        enemy.health -= self.power
        print("{} does {} damage to the {}. ".format(self.name, self.power, enemy.name))
        if self.health <= 0:
            print(self.name + ' are dead.')
        elif enemy.health <= 0:
            print(enemy.name + ' is dead.')
    def alive(self):
        if self.health > 0 or self.name == 'Zombie':
            return True
        else:
            return False
    def print_status(self):
        print("{} has {} health and {} power.".format(self.name, self.health, self.power))
    





class Hero(Character):
    def __init__(self, health, power):
        super().__init__(health, power)
        self.name = 'Hero'
        self.coins = 0
        self.armor = 0
        self.evade = 0 
    def attack(self, enemy):
        if enemy.name == 'Shadow':
            dmg = random.randint(1, 10)
            if dmg == 5:
                enemy.health -= self.power
                print("{} does {} damage to the {}. ".format(self.name, self.power, enemy.name))
            else:
                print('{} dodged! '.format(enemy.name))
            if self.health <= 0:
                print(self.name + ' are dead.')
            elif enemy.health <= 0:
                print(enemy.name + ' is dead.')
        elif enemy.name == 'Medic':
            regen = random.randint(1, 10)
            crit = random.randint(1, 10)
            if crit == 2 or crit == 3:
                self.power = (self.power * 2)
                print('Crit Chance!')
            enemy.health -= self.power
            print('{} does {} to the {}. '.format(self.name, self.power, enemy.name))
            if regen == 1 or regen == 2:
                enemy.health = enemy.health + 2
                print('Unlucky! {} health increased by 2! '.format(enemy.name))
            if self.health <= 0:
                print(self.name + ' are dead.')
            elif enemy.health <= 0:
                print(enemy.name + ' is dead.')
        else:
            crit = random.randint(1, 10)
            if crit == 2 or crit == 3:
                self.power = (self.power * 2)
                print('Crit Chance! {} does {} damage to the {}. '.format(self.name, self.power, enemy.name))
            enemy.health -= self.power
            print("{} does {} damage to the {}. ".format(self.name, self.power, enemy.name))
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
    def __init__(self, health, power):
        super().__init__(health, power)
        self.name = 'Goblin'

class Medic(Character):
    def __init__(self, health, power):
        super().__init__(health, power)
        self.name = 'Medic'
        self.bounty = 4

class Shadow(Character):
    def __init__(self, health, power):
        super().__init__(health, power)
        self.name = 'Shadow'
        self.bounty = 5

class Zombie(Character):
    def __init__(self, health, power):
        super().__init__(health, power)
        self.name = 'Zombie'

class Tank(Character):
    def __init__(self, health, power):
        super().__init__(health, power)
        self.name = 'Tank'
        self.bounty = 6

class Wizard(Character):
    def __init__(self, health, power):
        super().__init__(health, power)
        self.name = 'Wizard'
        self.bounty = 10

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

        


    

hero = Hero(40, 5)
goblin = Goblin(15, 2)
medic = Medic(30, 1)
tank = Tank(60, 3)
wizard = Wizard(25, 11)
shadow = Shadow(3, 8)
zombie = Zombie(0, 3)

def main(hero, enemy):
    while enemy.alive() and hero.alive():
        hero.print_status()
        enemy.print_status()
        print()
        print("What do you want to do?")
        print("1. fight {}".format(enemy.name))
        print("2. do nothing")
        print("3. flee")
        print("> ", end=' ')
        raw_input = input()
        if raw_input == "1":
            # Hero attacks enemy
            hero.attack(enemy)
        elif raw_input == "2":
            pass
        elif raw_input == "3":
            print("Goodbye.")
            break
        else:
            print("Invalid input {}".format(raw_input))

        if enemy.health > 0 or enemy.name == 'Zombie':
            # Enemy attacks Hero
            enemy.attack(hero)

# must change enemy in main() to whichever enemy you would like to fight
main(hero, shadow)