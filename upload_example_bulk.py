from pymongo import MongoClient
import pandas as pd
import json


client = MongoClient("mongodb+srv://erik:7575Gurka@project-sandbox-tl1lh.gcp.mongodb.net/prototau?retryWrites=true&w=majority")
collection = client.prototau.trackdatapoints
# print(db)

with open('data/example_data.json') as f:
  data = json.load(f)

  collection.insert_many(data)

print("Script ended gracefully...")