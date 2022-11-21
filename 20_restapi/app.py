"""
Space Butterflies: Gordon Mo, Harry Zhu
Softdev
K20 -- REST API 
2022-11-21
time spent
"""

from flask import flask
from flask import render_template

app = flask(__name__)

@app.route("/")
def display():
    return render_template('main.html')

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()