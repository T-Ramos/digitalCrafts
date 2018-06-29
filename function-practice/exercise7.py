import matplotlib.pyplot as plot 

def convert_to_f(x): 
    return (x * 9/5) + 32
   
     # put your code here

xs = list(range(-5, 6)) 
ys = [] 

for x in xs: 
     ys.append(convert_to_f(x)) 

plot.plot(xs, ys) 
plot.show()
plot.close()