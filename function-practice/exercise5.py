import matplotlib.pyplot as plot 
import math

def f(x): 
   return math.sin(x)
     # put your code here

xs = list(range(-5, 6)) 
ys = [] 

for x in xs: 
     ys.append(f(x)) 

plot.plot(xs, ys) 
plot.show()
plot.close()