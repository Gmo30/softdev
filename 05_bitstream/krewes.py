"""
Gordon Mo, Faiyaz Rafee
SoftDev
05_bitstream
2022-09-29
time spent: 2 hrs
DISCO: Slice, split, and splice are different! You can't split a
non-string. 

QCC: open() is used to open txt files with the second parameter "r" to read the file.
"""
import random

#krewes_file = open("krewes.txt", "r")
krewes_file = open("devofam.csv", "r")
content = krewes_file.read()
#print(content)
library = {2:[],
           7:[],
           8:[]}

# #SPLIT FOR krewes.txt file
# new_content = content.split("@@@")
# #print(len(new_content))
# 
# #def return_devo():
# for i in range(len(new_content)-1):
#         #print(new_content[i])
#     temp = new_content[i].split("$$$")
#         #print(temp)
#     if(temp[0] == "2"):   
#         library[2].append(temp[1])
#         library[2].append(temp[2])
#     elif(temp[0] == "7"):
#         library[7].append(temp[1])
#         library[7].append(temp[2])
#     elif(temp[0] == "8"):
#         library[8].append(temp[1])
#         library[8].append(temp[2])
# #return library

#SPLIT FOR devofam.csv file
new_content = content.split("\n")
#print(new_content)
for i in range(len(new_content)-1):
    temp = new_content[i].split(",")
    if(temp[1] == "2"):   
        library[2].append(temp[0])
        library[2].append(temp[2])
    elif(temp[1] == "7"):
        library[7].append(temp[0])
        library[7].append(temp[2])
    elif(temp[1] == "8"):
        library[8].append(temp[0])
        library[8].append(temp[2])

periods = [2,7,8]
period = random.choice(periods)
temp = library[period]
ducky = random.randrange(1,len(temp),2)
devo = ducky-1


print("Period:", period, "Devo:" ,temp[devo],"Ducky:",  temp[ducky])


#return_devo()
#print(return_devo())
#print(library[2])
# print(library)
#print(devo)
