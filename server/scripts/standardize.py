import json, os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()
MONGO_URL = os.getenv('PY_MONGO_URL')
client = MongoClient(MONGO_URL)
db = client['tormenta']
Book = db['Book']
Feat = db['Feat']

def standardize(obj):
    for key in obj.keys():
        obj[key] = obj[key].capitalize()
    return obj

with open('../json/feats.json', 'r') as data:
    feats = json.load(data)

books = {}

for i, section in enumerate(feats):
    for j, feat in enumerate(section):
        standard = standardize(feat)
        feat_id = Feat.insert_one(standard).inserted_id
        if (feat['livro'] in books):
            books[feat['livro']] += 1
            book = Book.find_one({ 'nome': feat['livro'] })
            book['talentos'].append({
                'nome': feat['nome'],
                'id': feat_id
            })
            Book.update_one({ 'nome': feat['livro'] }, { "$set": book })
        else:
            books[feat['livro']] = 1
            Book.insert_one({
                'nome': feat['livro'],
                'talentos': [{ 'nome': feat['nome'], 'id': feat_id }]
            })
    print("SECTION", i, "DONE")

# ADD IN BOOKS THE NUMBER OF FEATS

print("DONE")
