from flask import Flask, render_template, request, send_from_directory, jsonify
from server import Data
import os




app = Flask(__name__)
data = Data()
JSON_PATH = 'tonconnect-manifest.json'

@app.route('/tonconnect-manifest.json')
def tconnect():
    return send_from_directory(os.path.dirname(os.path.abspath(__file__)), JSON_PATH)

@app.route('/<user_id>_<refer_id>')
def hello_page(user_id, refer_id):
    data.registration(user_id, refer_id)
    return render_template('hello.html', user_id=user_id, refer_id=refer_id)


@app.route('/home<user_id>')
def index_page(user_id=0):
    return render_template('index.html', user_id=user_id)


@app.route('/mine<user_id>')
def mine_page(user_id=0):
    return render_template('mine.html', user_id=user_id)

@app.route('/shop<user_id>')
def shop_page(user_id=0):
    return render_template('shop.html', user_id=user_id)

@app.route('/uniqe<user_id>')
def uniqe_page(user_id=0):
    return render_template('uniqe.html', user_id=user_id)

@app.route('/tap<user_id>')
def utape_page(user_id=0):
    return render_template('tap.html', user_id=user_id)


@app.route('/team<user_id>')
def team_page(user_id=0):
    ref_count = data.get_refferals(user_id)
    ref_ids = data.get_refferals_ids(user_id)
    refer_award = data.get_reffer_award(user_id)

    return render_template('team.html', user_id=user_id, refs=ref_count, refid=ref_ids, refaward=refer_award)

@app.route('/b', methods=['POST'])
def b():
        req = request.get_json(force=True, silent=True)
        print('REQUEST: ', req)
        user_id = req['user_id']
        balance = req['balance']

        data.update_balance(user_id, balance)

        return req

@app.route('/total_income', methods=['POST'])
def ti():
    req = request.get_json(force=True, silent=True)
    print('REQUEST: ', req)
    user_id = req['user_id']
    ti = req['ti']

    data.update_ti(user_id, ti)
    return 'success'
    


if __name__ == '__main__':
    app.run() # debug=True, host='0.0.0.0'

