from requests import get
from flask import Flask,request
import requests

UNSPLASH_URL="https://api.unsplash.com/photos/random/"
UNSPLASH_KEY="_4o8BrZtZQ4zjXrL_UUD0A8PaLfKL9LQlfGcjvvzfs4"

app = Flask(__name__)

@app.route("/new-image")
def new_image():
    word=request.args.get("query")

    headers = {
      "Accept-Version": "v1",
      "Authorization":"Client-ID "+UNSPLASH_KEY
    }
    
    params = {
      "query":word
    }
    
    response=requests.get(url=UNSPLASH_URL,headers=headers,params=params)
    print(response)
    return{"word":word}

if __name__ == "__main__":
  app.run(host="0.0.0.0",port=5050)