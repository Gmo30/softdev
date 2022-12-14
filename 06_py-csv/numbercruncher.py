"""
MOLDY MEATS
Roster + Duckies: Gordon Mo, Faiyaz Rafee, Blooman, Horizon
06_py-csv
time spent:1 hr
Disco: rsplit() splits a string from the right.
QCC:
How this script works: We open the csv file. Then we convert it into
a string. Using this string we split it based on "\n" and commas.
Then we added the value to its respective key in the dictionary.
"""
import random

occupations_file = open("occupations.csv", "r")
content = occupations_file.read()
#print(content)

library = {"Job Class":[],
           "Percentage":[]
    }

new_content = content.split('\n')
#print(new_content)

temp = []
for i in range(len(new_content)-1):
    temp += (new_content[i].rsplit(",",1))
#print(temp)

for i in range(2,len(temp)-2,2):
    #print(i)
    library["Job Class"].append(temp[i])
    library["Percentage"].append(float(temp[i+1]))
    
#print(library)


options = library["Job Class"]
option_weights = library["Percentage"]
print(random.choices(options, weights=option_weights))
print(library["Job Class"][1])
#print(library["Job Class"])

def job_lister():
    i = 0
    list_of_occupations = ""
    while i < len(library["Job Class"]):
        list_of_occupations += library["Job Class"][i] + "<br/>"
        i += 1
    return list_of_occupations

print(job_lister())
job_lister()
print(job_lister())
