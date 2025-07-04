import os
from flask import Flask, send_from_directory
from flask_cors import CORS

from api.api import api_bp


app = Flask(__name__, static_folder="frontend", static_url_path="/frontend")
CORS(app)


app.register_blueprint(api_bp)


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_react(path):
    print(f"serve_react called for path: {path}")
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080, debug=True)
