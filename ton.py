import re
import requests

def parse_ton_link(ton_link):
    # Шаблон для извлечения хеша транзакции из ton:// ссылки
    pattern = r'ton:\/\/(transaction\/|)([a-zA-Z0-9]+)'
    match = re.match(pattern, ton_link)
    if match:
        return match.group()  # возвращаем хеш транзакции
    return None

def check_transaction_success(tx_hash):
    TONCENTER_API_URL = "https://toncenter.com/api/v2"
    url = f"{TONCENTER_API_URL}/getTransaction/{tx_hash}"
    headers = {
        "Accept": "application/json"
    }
    
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        return data.get("success")  # или другое поле, отвечающее за статус транзакции
    else:
        return None  # Обработка ошибок, если API не отвечает


trans = 'ton://transfer/UQCUgW3KL5awMHH8tmAuw7XsPskTI4IyqpNJ1dZgIM-p6ufI?amount=1?bin=cHJvdGVjdGlvbg'

res = check_transaction_success('cHJvdGVjdGlvbg')
print(res)