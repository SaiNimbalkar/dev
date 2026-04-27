from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form['name']
    email = request.form['email']

    if name == "" or email == "":
        return "Error: All fields required"

    return "Registration Successful"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)