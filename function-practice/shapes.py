from turtle import *
mode('logo')
speed(5)
shape('turtle')

# equilateral triangle

def equilateral_triangle():
    begin_fill()
    color('Red')
    for i in range(3):
        forward(100)
        left(120)
    end_fill()

# square

def square():
    for i in range(4):
        color('Grey')
        foward(100)
        left(90)

# pentagon

def pentagon():
    begin_fill()
    color("IndianRed")
    for i in range(5):
        left(72)
        forward(100)
    end_fill()

# hexagon

def hexagon():
    for i in range(6):
        pensize(3)
        left(60)
        forward(100)

# octagon

def octagon():
    for i in range(8):
        pensize(6)
        left(45)
        forward(100)

# star

def star():
    for i in range(5):
        color("SprintGreen")
        forward(100)
        right(144)

# circle

def circle():
    begin_fill()
    color("aquamarine")
    circle(75)
    endfill()

mainloop()