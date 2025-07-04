from flask import Blueprint, jsonify

api_bp = Blueprint("api", __name__, url_prefix="/api")

items = [
    {"id": 1, "name": "Apple", "price": 1.2},
    {"id": 2, "name": "Banana", "price": 0.8}
]

@api_bp.route("/items", methods=["GET"])
def get_items():
    return jsonify(items)