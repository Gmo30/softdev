import random
occupations_file = open("occupations.csv", "r")
content = occupations_file.read()
#print(content)

library = {Job Class:[],
           Percentage:[]
    }

new_content = content.split("\n")
for i in range(len(new_content)-1):
    new_content = new_content.split(",")
print(new_content)