str1 = input("Give a sting: ")
str2 = input("Give another string with an extra character than first string: ")


for i in str2:
    if i not in str1:
        print(i)