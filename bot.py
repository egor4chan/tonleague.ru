from aiogram import Bot, Dispatcher
from aiogram.types import Message, ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo, WebAppData
from aiogram.filters import CommandStart
import asyncio


bot = Bot(token='7388243533:AAEMH7wpms_kGeESPP217LWqE3txFu1qfQQ')
dp = Dispatcher()



@dp.message()
async def address_check(message: Message):
    refer_id = 5247769901
    personal_url = f'https://tonleague.ru/{message.from_user.id}_{refer_id}'
    markup = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text='Play Now 💸', web_app=WebAppInfo(url=personal_url))],
    [InlineKeyboardButton(text='Join community', url='https://t.me/thetonleague')]
])

    await message.answer('Welcome to the TON League!\n\nStart to earn TON now!', reply_markup=markup)

async def main():
    await dp.start_polling(bot)

if __name__ == '__main__':
    asyncio.run(main())