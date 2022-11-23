"""
Space Butterflies: Gordon Mo, Harry Zhu
Softdev
K20 -- REST API 
2022-11-21
time spent
"""

from flask import Flask
from flask import render_template
import requests

app = Flask(__name__)

key = open("key_nasa.txt").read()
urlString = "https://api.nasa.gov/planetary/apod?api_key=" + key
res = requests.get(urlString)
json = res.json()
#print(res.text) #str type
#print(json["url"])

@app.route("/")
def picture():
    return render_template('main.html', url = json["url"], explanation = json["explanation"], title = json["title"])

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()