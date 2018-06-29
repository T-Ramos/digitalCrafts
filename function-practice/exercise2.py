import matplotlib.pyplot as plot 

def f(x): 
   return x + 1
     # put your code here

xs = list(range(-3, 4)) 
ys = [] 

for x in xs: 
     ys.append(f(x)) 

plot.plot(xs, ys) 
plot.show()