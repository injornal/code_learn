from flask import Flask, jsonify, request, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
items = [
    {"id": 1, "name": "Apple", "price": 1.2},
    {"id": 2, "name": "Banana", "price": 0.8}
]

@app.route("/items", methods=["GET"])
def hello():
    return jsonify(items)



app.run()