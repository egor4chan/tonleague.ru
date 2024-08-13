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
            
            
        
        

data = Data()
#print(data.set_null_reffer_award(12))
