from flask import Flask
from flask import request
from flask import render_template
from flask import jsonify
import utils
from gevent import pywsgi

app = Flask(__name__)


@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/login')
def login():
    uid = request.values.get("uid")
    pwd = request.values.get("pwd")
    return f'uid={uid}, pwd={pwd}'

@app.route('/abc')
def abc():
    uid = request.values.get("uid")
    return f'''
    <form action="/login">
        账号：<input name="uid" value="{uid}"><br>
        密码：<input name="pwd">
        <input type="submit">
    </form>
    '''
@app.route('/data')
def get_data():
    dtype = request.values.get("dname")
    if dtype == "statistic": 
        data = utils.get_statistic()
    elif dtype == "words": 
        data = utils.get_words()
    elif dtype == "data1": 
        data = utils.get_data1()
    elif dtype == "data2": 
        data = utils.get_data2()
    elif dtype == "data3": 
        data = utils.get_data3()
    elif dtype == "data4": 
        data = utils.get_data4()
    elif dtype == "data5": 
        data = utils.get_data5()
    elif dtype == "data6": 
        data = utils.get_data6()
    else:
        data = []
    return jsonify(data)

@app.route('/index')
def echarts():
    return render_template("./index.html")

if __name__ == '__main__':
    # server = pywsgi.WSGIServer(('0.0.0.0', 5000), app)
    # server.serve_forever()
    app.run(host="127.0.0.1", port=5000, threaded=True)

