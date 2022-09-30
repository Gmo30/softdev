"""
Gordon Mo, Faiyaz Rafee
SoftDev
05_bitstream
2022-09-29
time spent:
DISCO: Slice, split, and splice are different! You can't split a
non-string. 
QCC:
"""

krewes_file = open("krewes.txt", "r")
content = krewes_file.read()
#print(content.split("$$$",1))
library = {2:[],
           7:[],
           8:[]}

new_content = content.split("@@@")
#print(len(new_content))

def return_devo():
    for i in range(len(new_content)-1):
        #print(new_content[i])
        temp = new_content[i].split("$$$")
        print(temp)
        if(temp[0] == "2"):   
            library[2].append(temp[1])
            library[2].append(temp[2])
        elif(temp[0] == "7"):
            library[7].append(temp[1])
            library[7].append(temp[2])
        elif(temp[0] == "8"):
            library[8].append(temp[1])
            library[8].append(temp[2])
    return library

#return_devo()
print(return_devo())
#print(library[2])
#print(library)