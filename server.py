import sqlite3

db = sqlite3.connect('server.db', check_same_thread=False)
cursor = db.cursor()

class Data():


    def __init__(self):
        self.db = db = sqlite3.connect('server.db', check_same_thread=False)
        self.cursor = cursor = db.cursor()

    def registration(self, user_id, refer_id=0):
        try:
            cursor.execute("INSERT INTO users (user_id, refer_id) VALUES (?, ?);", (user_id, refer_id))
            db.commit()
        except: 
            print('uniqe')

    def get_balance(self, user_id):
        data = cursor.execute(f"SELECT balance FROM users WHERE user_id = {user_id}").fetchall()
        return float(data[0][0])

    def update_balance(self, user_id, balance):
        cursor.execute("UPDATE users SET balance = ? WHERE user_id = ?;", (balance, user_id))
        db.commit()

    def update_ti(self, user_id, ti):
        cursor.execute("UPDATE users SET total_earned = ? WHERE user_id = ?;", (ti, user_id))
        db.commit()
        
    def get_refferals(self, user_id):
        data = cursor.execute(f"SELECT user_id FROM users WHERE refer_id = {user_id};").fetchall()
        data = len(data)
        return data

    def get_refferals_ids(self, user_id):
        data = cursor.execute(f"SELECT user_id FROM users WHERE refer_id = {user_id};").fetchall()
        
        return data
    
    def get_refferals_ti(self, user_id):
        data = cursor.execute(f"SELECT user_id FROM users WHERE refer_id = {user_id};").fetchall()
        
        users_ti = []
        for user in data:
            x = user[0]
            datanew = cursor.execute(f"SELECT total_earned FROM users WHERE user_id = {x};").fetchall()
    
            users_ti.append(datanew)

        return users_ti

    def get_reffer_award(self, user_id):
        data = cursor.execute(f"SELECT user_id FROM users WHERE refer_id = {user_id};").fetchall()
        
        res = 0
        for user in data:
            x = user[0]
            datanew = cursor.execute(f"SELECT total_earned FROM users WHERE user_id = {x};").fetchall()
            res = res + datanew[0][0]
            res = round(res, 5)
        return res / 10

    def set_null_reffer_award(self, user_id):
        data = cursor.execute(f"SELECT user_id FROM users WHERE refer_id = {user_id};").fetchall()
        
        res = 0
        for user in data:
            x = user[0]
            datanew = cursor.execute(f"UPDATE users SET total_earned = 0 WHERE user_id = {x};").fetchall()
            db.commit()
            
    def get_refferals_info(self, user_id):
        result = {'id': data.get_refferals_ids(user_id), 'ti': data.get_refferals_ti(user_id)}
        return result
        
    def get_reward(self, user_id):
        data = cursor.execute(f"SELECT reward FROM users WHERE user_id = {user_id};").fetchall()
        return data[0][0]

    def get_refer_id(self, user_id):
        data = cursor.execute(f"SELECT refer_id FROM users WHERE user_id = {user_id};").fetchall()
        return data[0][0]

    def set_users_refer_reward(self, user_id, reward): # по заходу на index.html выполнить эту функцию /// увеличивает reward рефера зашедшего юзера
        refer_id = data.get_refer_id(user_id)

        if refer_id == 0:
            pass
        else:
            refer_reward_now = data.get_reward(refer_id)
            refer_reward_after = round(float(refer_reward_now) + float(reward), 6)

            responce = cursor.execute(f"UPDATE users SET reward = {refer_reward_after} WHERE user_id = {refer_id};").fetchall()
            db.commit()

    def clean_reward_user(self, user_id):
        data = cursor.execute(f"UPDATE users SET reward = 0 WHERE user_id = {user_id};").fetchall()
        db.commit()

data = Data()
x = data.get_balance(50000000)
print(x)
