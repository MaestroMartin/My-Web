from flask import Flask, render_template

app = Flask(__name__, template_folder='templates',static_folder='static')

@app.route("/")
def home():
    return render_template('base.html')

@app.route("/login")
def login():
    return render_template('login.html')





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug= True)