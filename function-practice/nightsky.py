from turtle import *
speed(20)
import random

bgcolor("NavyBlue")

def star():
    begin_fill()
    color("goldenrod")
    for i in range(5):
        right(144)
        forward(15)
        left(72)
        forward(15)
    end_fill()
    up()
    goto(random.randint(-300, 300), random.randint(-300, 300))
    down()

for i in range(1, 50):
    star()
mainloop()