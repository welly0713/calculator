from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("main.html")

@app.route("/test")
def test():
    return "This is test"

if __name__ =="__main__":
    app.run()
    