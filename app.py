from flask import Flask, request, abort
from flask import render_template
from flask import make_response

import threading
import time


app = Flask(__name__)

@app.route("/")
def map_home():
	return render_template("map.html")

if __name__ == "__main__":
	app.run('0.0.0.0', port=32767, threaded=True, use_reloader=False)