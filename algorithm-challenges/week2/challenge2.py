import math

a = 0
b = 0
c = 0

for i in range(0, 1000):
   for l in range(0, 1000):
       for k in range(0, 1000):
           if (i < l < k):
               if (i + l + k) == 1000:
                   if ((i * i) + (l * l) == (k * k)):
                       print(i)
                       print(l)
                       print(k)
                       break


        


