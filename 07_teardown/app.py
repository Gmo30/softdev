"""
Moldy Meats: Gordon Mo, Faiyaz Rafee
10/03/2022
07_teardown

"""
from flask import Flask

app = Flask(__name__) # Q0: Where have you seen similar syntax in other langs?

@app.route("/") # Q1: What points of reference do you have for meaning of '/'?
def hello_world():
    print(__name__) # Q2: Where will this print to? Q3: What will it print?
    return "No hablo queso!"  # Q4: Will this appear anywhere? How u know?

app.run()  # Q5: Where have you seen similar constructs in other languages?


'''
DISCO:
QCC:
0. We have seen similar syntax in java classes
1. Division symbol, similar things being compared
2. Print in the shell maybe?
3. app
4. Appear in browser, we know because we ran the code and clicked on link.
5. We have seen it in java
...
INVESTIGATIVE APPROACH:
<Your concise summary of how
 you and your team set about
 "illuminating the cave of ignorance" here...>
'''