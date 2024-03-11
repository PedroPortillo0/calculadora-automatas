from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['POST'])
def calculate():
    data = request.get_json()
    expression = data['expression']

    try:
        result = eval(expression)
    except:
        result = "Error"

    return {'result': result}

if __name__ == "__main__":
    app.run(debug=True)