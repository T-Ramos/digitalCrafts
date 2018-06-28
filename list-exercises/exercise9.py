A = [[2, 3], [5, 3]]
 

B = [[4, 5], [3, 4]]


result = [[sum(a + b for a, b in zip(A_row, B_col))
    for B_col in zip(*B)]
        for A_row in A]
 
for r in result:
    print(r)