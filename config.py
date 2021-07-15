import os

class Config(object):
    SECRET_KEY = os.environ.get('SECRET>KEY') or "my_secret_key"
    MONGODB_DB = 'shoppingList'
    MONGODB_HOST = '0.0.0.0'
    MONGODB_PORT = 27017
    ENV = 'development'
    SERVER_NAME = 'localhost:5000'
    DEBUG = True