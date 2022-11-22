"""
Space Butterflies: Gordon Mo, Harry Zhu
Softdev
K20 -- REST API 
2022-11-21
time spent
"""

from flask import Flask
app = Flask(__name__)
import requests

key = open("key_nasa.txt").read()
urlString = "https://api.nasa.gov/planetary/apod?api_key=" + key
res = requests.get(urlString)
json = res.json()
print(json["url"])

# @app.route("/")
# def picture():
#     key = open("key\_nasa.txt").read()
#     res = requests.get('https://api.nasa.gov/planetary/apod?api_key=' + key)

if __name__ == "__main__": #false if this file imported as module
    #enable debugging, auto-restarting of server when this file is modified
    app.debug = True 
    app.run()